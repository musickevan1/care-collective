'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HelpResponseModal } from './help-response-modal'
import Link from 'next/link'
import { Plus } from 'lucide-react'

type HelpItem = {
  id: string
  user_id: string
  title: string
  description: string
  type: 'request' | 'offer'
  category: string
  location: string | null
  urgency: 'low' | 'medium' | 'high'
  status: 'active' | 'fulfilled' | 'cancelled'
  created_at: string
  profiles: {
    full_name: string | null
    location: string | null
  }
}

export function HelpBoard() {
  const [helpItems, setHelpItems] = useState<HelpItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'request' | 'offer'>('all')
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)
  const supabase = createClient()

  const loadHelpItems = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('help_items')
        .select(`
          *,
          profiles (
            full_name,
            location
          )
        `)
        .eq('status', 'active')
        .order('created_at', { ascending: false })

      if (error) throw error
      setHelpItems(data || [])
    } catch (error) {
      console.error('Error loading help items:', error)
    } finally {
      setIsLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setCurrentUserId(user?.id || null)
    }

    getCurrentUser()
    loadHelpItems()
    
    const channel = supabase
      .channel('help_items')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'help_items' }, () => {
        loadHelpItems()
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [loadHelpItems, supabase])

  const filteredItems = filter === 'all' 
    ? helpItems 
    : helpItems.filter(item => item.type === filter)

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

  if (isLoading) {
    return <div className="text-center py-8">Loading help items...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Help Exchange Board</h1>
          <p className="text-gray-600">Connect with your community to offer or request help</p>
        </div>
        <Link href="/help/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Post Help
          </Button>
        </Link>
      </div>

      <div className="flex gap-2">
        <Button 
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
        >
          All ({helpItems.length})
        </Button>
        <Button 
          variant={filter === 'request' ? 'default' : 'outline'}
          onClick={() => setFilter('request')}
        >
          Requests ({helpItems.filter(item => item.type === 'request').length})
        </Button>
        <Button 
          variant={filter === 'offer' ? 'default' : 'outline'}
          onClick={() => setFilter('offer')}
        >
          Offers ({helpItems.filter(item => item.type === 'offer').length})
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
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
                </div>
              </div>
              <CardDescription className="line-clamp-3">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Category:</span>
                  <span className="capitalize">{item.category}</span>
                </div>
                {(item.location || item.profiles.location) && (
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Location:</span>
                    <span>{item.location || item.profiles.location}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="font-medium">Posted by:</span>
                  <span>{item.profiles.full_name || 'Anonymous'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Posted:</span>
                  <span>{new Date(item.created_at).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="mt-4">
                {currentUserId && currentUserId !== item.user_id ? (
                  <HelpResponseModal
                    helpItem={item}
                    currentUserId={currentUserId}
                    onResponseSubmitted={loadHelpItems}
                  />
                ) : currentUserId === item.user_id ? (
                  <Button size="sm" className="w-full" variant="outline" disabled>
                    Your Item
                  </Button>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No {filter === 'all' ? '' : filter + ' '}items found.</p>
          <Link href="/help/new">
            <Button className="mt-4">
              <Plus className="mr-2 h-4 w-4" />
              Be the first to post
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}