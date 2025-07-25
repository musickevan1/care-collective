'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { Plus, MessageSquare, Trash2 } from 'lucide-react'

type HelpItem = {
  id: string
  title: string
  description: string
  type: 'request' | 'offer'
  category: string
  location: string | null
  urgency: 'low' | 'medium' | 'high'
  status: 'active' | 'fulfilled' | 'cancelled'
  created_at: string
  _count?: {
    help_responses: number
  }
}

type HelpResponse = {
  id: string
  user_id: string
  message: string
  status: 'pending' | 'accepted' | 'declined' | 'completed'
  created_at: string
  profiles: {
    full_name: string | null
    email: string
    phone: string | null
  }
}

export function MyHelpItems() {
  const [helpItems, setHelpItems] = useState<HelpItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedItemResponses, setSelectedItemResponses] = useState<HelpResponse[]>([])
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)
  const [isLoadingResponses, setIsLoadingResponses] = useState(false)
  const supabase = createClient()

  const loadMyHelpItems = useCallback(async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      // First get the help items
      const { data: helpItemsData, error: helpItemsError } = await supabase
        .from('help_items')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (helpItemsError) throw helpItemsError

      // Then get the response counts for each item
      const itemsWithCounts = await Promise.all(
        (helpItemsData || []).map(async (item) => {
          const { count } = await supabase
            .from('help_responses')
            .select('*', { count: 'exact', head: true })
            .eq('help_item_id', item.id)

          return {
            ...item,
            _count: {
              help_responses: count || 0
            }
          }
        })
      )
      
      setHelpItems(itemsWithCounts)
    } catch (error) {
      console.error('Error loading help items:', error)
    } finally {
      setIsLoading(false)
    }
  }, [supabase])

  const loadItemResponses = async (itemId: string) => {
    setIsLoadingResponses(true)
    setSelectedItemId(itemId)
    
    try {
      const { data, error } = await supabase
        .from('help_responses')
        .select(`
          *,
          profiles (
            full_name,
            email,
            phone
          )
        `)
        .eq('help_item_id', itemId)
        .order('created_at', { ascending: false })

      if (error) throw error
      setSelectedItemResponses(data || [])
    } catch (error) {
      console.error('Error loading responses:', error)
    } finally {
      setIsLoadingResponses(false)
    }
  }

  const updateItemStatus = async (itemId: string, newStatus: 'active' | 'fulfilled' | 'cancelled') => {
    try {
      const { error } = await supabase
        .from('help_items')
        .update({ status: newStatus })
        .eq('id', itemId)

      if (error) throw error
      await loadMyHelpItems()
    } catch (error) {
      console.error('Error updating item status:', error)
      alert('Failed to update item status')
    }
  }

  const deleteItem = async (itemId: string) => {
    if (!confirm('Are you sure you want to delete this help item? This action cannot be undone.')) {
      return
    }

    try {
      const { error } = await supabase
        .from('help_items')
        .delete()
        .eq('id', itemId)

      if (error) throw error
      await loadMyHelpItems()
    } catch (error) {
      console.error('Error deleting item:', error)
      alert('Failed to delete item')
    }
  }

  const updateResponseStatus = async (responseId: string, newStatus: 'accepted' | 'declined') => {
    try {
      const { error } = await supabase
        .from('help_responses')
        .update({ status: newStatus })
        .eq('id', responseId)

      if (error) throw error
      
      if (selectedItemId) {
        await loadItemResponses(selectedItemId)
      }
    } catch (error) {
      console.error('Error updating response status:', error)
      alert('Failed to update response status')
    }
  }

  useEffect(() => {
    loadMyHelpItems()
  }, [loadMyHelpItems])


  const activeItems = helpItems.filter(item => item.status === 'active')
  const fulfilledItems = helpItems.filter(item => item.status === 'fulfilled')
  const cancelledItems = helpItems.filter(item => item.status === 'cancelled')

  if (isLoading) {
    return <div className="text-center py-8">Loading your help items...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">My Help Items</h1>
          <p className="text-gray-600">Manage your help requests and offers</p>
        </div>
        <Link href="/help/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Post New Help
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">
            Active ({activeItems.length})
          </TabsTrigger>
          <TabsTrigger value="fulfilled">
            Fulfilled ({fulfilledItems.length})
          </TabsTrigger>
          <TabsTrigger value="cancelled">
            Cancelled ({cancelledItems.length})
          </TabsTrigger>
          {selectedItemId && (
            <TabsTrigger value="responses">
              Responses
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {activeItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">You don&apos;t have any active help items.</p>
              <Link href="/help/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create your first help item
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {activeItems.map((item) => (
                <HelpItemCard
                  key={item.id}
                  item={item}
                  onViewResponses={loadItemResponses}
                  onUpdateStatus={updateItemStatus}
                  onDelete={deleteItem}
                />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="fulfilled" className="space-y-4">
          {fulfilledItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No fulfilled help items yet.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {fulfilledItems.map((item) => (
                <HelpItemCard
                  key={item.id}
                  item={item}
                  onViewResponses={loadItemResponses}
                  onUpdateStatus={updateItemStatus}
                  onDelete={deleteItem}
                />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-4">
          {cancelledItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No cancelled help items.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cancelledItems.map((item) => (
                <HelpItemCard
                  key={item.id}
                  item={item}
                  onViewResponses={loadItemResponses}
                  onUpdateStatus={updateItemStatus}
                  onDelete={deleteItem}
                />
              ))}
            </div>
          )}
        </TabsContent>

        {selectedItemId && (
          <TabsContent value="responses" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Responses</h3>
              <Button 
                variant="outline" 
                onClick={() => setSelectedItemId(null)}
              >
                Back to Items
              </Button>
            </div>
            
            {isLoadingResponses ? (
              <div className="text-center py-8">Loading responses...</div>
            ) : selectedItemResponses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No responses yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {selectedItemResponses.map((response) => (
                  <ResponseCard
                    key={response.id}
                    response={response}
                    onUpdateStatus={updateResponseStatus}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}

interface HelpItemCardProps {
  item: HelpItem
  onViewResponses: (itemId: string) => void
  onUpdateStatus: (itemId: string, status: 'active' | 'fulfilled' | 'cancelled') => void
  onDelete: (itemId: string) => void
}

function HelpItemCard({ item, onViewResponses, onUpdateStatus, onDelete }: HelpItemCardProps) {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'destructive'
      case 'medium': return 'default'
      case 'low': return 'secondary'
      default: return 'secondary'
    }
  }

  const getTypeColor = (type: string) => {
    return type === 'request' ? 'outline' : 'default'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'default'
      case 'fulfilled': return 'secondary'
      case 'cancelled': return 'destructive'
      default: return 'secondary'
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
          <div className="flex gap-1">
            <Badge variant={getTypeColor(item.type)}>
              {item.type}
            </Badge>
            <Badge variant={getUrgencyColor(item.urgency)}>
              {item.urgency}
            </Badge>
            <Badge variant={getStatusColor(item.status)}>
              {item.status}
            </Badge>
          </div>
        </div>
        <CardDescription className="line-clamp-3">
          {item.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Category:</span>
            <span className="capitalize">{item.category}</span>
          </div>
          {item.location && (
            <div className="flex items-center justify-between">
              <span className="font-medium">Location:</span>
              <span>{item.location}</span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="font-medium">Posted:</span>
            <span>{new Date(item.created_at).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Responses:</span>
            <span>{item._count?.help_responses || 0}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1"
              onClick={() => onViewResponses(item.id)}
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              Responses ({item._count?.help_responses || 0})
            </Button>
          </div>
          
          <div className="flex gap-2">
            {item.status === 'active' && (
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onUpdateStatus(item.id, 'fulfilled')}
              >
                Mark Fulfilled
              </Button>
            )}
            {item.status === 'active' && (
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onUpdateStatus(item.id, 'cancelled')}
              >
                Cancel
              </Button>
            )}
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => onDelete(item.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface ResponseCardProps {
  response: HelpResponse
  onUpdateStatus: (responseId: string, status: 'accepted' | 'declined') => void
}

function ResponseCard({ response, onUpdateStatus }: ResponseCardProps) {
  const getResponseStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'default'
      case 'accepted': return 'secondary'
      case 'declined': return 'destructive'
      case 'completed': return 'secondary'
      default: return 'secondary'
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base">
              {response.profiles.full_name || 'Anonymous'}
            </CardTitle>
            <CardDescription>
              {response.profiles.email}
            </CardDescription>
          </div>
          <Badge variant={getResponseStatusColor(response.status)}>
            {response.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-gray-700 mb-4">{response.message}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span>Received: {new Date(response.created_at).toLocaleDateString()}</span>
          {response.profiles.phone && (
            <span>Phone: {response.profiles.phone}</span>
          )}
        </div>
        
        {response.status === 'pending' && (
          <div className="flex gap-2">
            <Button 
              size="sm" 
              onClick={() => onUpdateStatus(response.id, 'accepted')}
            >
              Accept
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => onUpdateStatus(response.id, 'declined')}
            >
              Decline
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}