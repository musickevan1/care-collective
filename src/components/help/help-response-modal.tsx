'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface HelpResponseModalProps {
  helpItem: {
    id: string
    title: string
    type: 'request' | 'offer'
    profiles: {
      full_name: string | null
    }
  }
  currentUserId: string
  onResponseSubmitted?: () => void
}

export function HelpResponseModal({ 
  helpItem, 
  currentUserId, 
  onResponseSubmitted 
}: HelpResponseModalProps) {
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const supabase = createClient()

  const handleSubmit = async () => {
    if (!message.trim()) return

    setIsLoading(true)
    try {
      const { error } = await supabase
        .from('help_responses')
        .insert({
          help_item_id: helpItem.id,
          user_id: currentUserId,
          message: message.trim(),
          status: 'pending'
        })

      if (error) throw error

      setMessage('')
      setIsOpen(false)
      onResponseSubmitted?.()
    } catch (error) {
      console.error('Error submitting response:', error)
      alert('Failed to submit response. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const actionText = helpItem.type === 'request' ? 'offer help' : 'request this help'
  const modalTitle = helpItem.type === 'request' 
    ? `Offer Help: ${helpItem.title}` 
    : `Request Help: ${helpItem.title}`

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="w-full">
          Respond
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{modalTitle}</DialogTitle>
          <DialogDescription>
            Send a message to {helpItem.profiles.full_name || 'the poster'} to {actionText}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              id="message"
              placeholder={`Hi! I'd like to ${actionText}. Here are the details...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="resize-none"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading || !message.trim()}
          >
            {isLoading ? 'Sending...' : 'Send Response'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}