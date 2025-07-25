'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

const CATEGORIES = [
  'transportation',
  'meals',
  'companionship',
  'errands',
  'medical_assistance',
  'pet_care',
  'home_maintenance',
  'childcare',
  'technology_help',
  'other'
]

export function NewHelpForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState<'request' | 'offer'>('request')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [availability, setAvailability] = useState('')
  const [urgency, setUrgency] = useState<'low' | 'medium' | 'high'>('medium')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        setMessage('Not authenticated')
        return
      }

      const { error } = await supabase
        .from('help_items')
        .insert({
          user_id: user.id,
          title,
          description,
          type,
          category,
          location: location || null,
          availability,
          urgency,
        })

      if (error) {
        setMessage(error.message)
      } else {
        router.push('/')
      }
    } catch {
      setMessage('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Post a Help {type === 'request' ? 'Request' : 'Offer'}
        </CardTitle>
        <CardDescription className="text-center">
          Connect with your community by {type === 'request' ? 'asking for help' : 'offering to help others'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Type</Label>
              <Select value={type} onValueChange={(value: 'request' | 'offer') => setType(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="request">Help Request</SelectItem>
                  <SelectItem value="offer">Help Offer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              type="text"
              placeholder={type === 'request' ? 'What do you need help with?' : 'What can you help with?'}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              placeholder={type === 'request' 
                ? 'Provide details about what you need help with...' 
                : 'Describe how you can help others...'}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              disabled={isLoading}
              className="min-h-[120px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                placeholder="Specific location (if different from profile)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                disabled={isLoading}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="urgency">Urgency</Label>
              <Select value={urgency} onValueChange={(value: 'low' | 'medium' | 'high') => setUrgency(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="availability">Availability/Timeline</Label>
            <Input
              id="availability"
              type="text"
              placeholder="When are you available? (e.g., 'Weekends', 'ASAP', 'Flexible')"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="flex gap-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => router.push('/')}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={isLoading}>
              {isLoading ? 'Posting...' : `Post ${type === 'request' ? 'Request' : 'Offer'}`}
            </Button>
          </div>
          
          {message && (
            <p className="text-sm text-center text-red-600">
              {message}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}