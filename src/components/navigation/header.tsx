'use client'

import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'
import { LogOut, User as UserIcon, Plus, Menu, X, HeartHandshake, Bell } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface HeaderProps {
  user: User | null
  profile?: {
    full_name: string
    email: string
  } | null
}

export function Header({ user, profile }: HeaderProps) {
  const router = useRouter()
  const supabase = createClient()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/auth/signin')
  }

  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <HeartHandshake className="h-6 w-6 text-primary" />
            <Link href={user ? "/app/announcements" : "/"} className="text-lg font-bold text-foreground">
              CARE Collective
            </Link>
          </div>

          {/* Desktop Navigation */}
          {user && (
            <nav className="hidden md:flex items-center space-x-1">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/app/announcements">Announcements</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/app/help-board">Help Board</Link>
              </Button>
            </nav>
          )}

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {user && (
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
            )}

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <UserIcon className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline-block">
                      {profile?.full_name || user.email}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {profile?.full_name || 'User'}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/app/profile">
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/app/my-help">
                      <span className="mr-2 h-4 w-4">📋</span>
                      <span>My Help Items</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" size="sm" asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && user && (
          <div className="md:hidden border-t border-border mt-2 pt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              <Button variant="ghost" size="sm" asChild className="justify-start">
                <Link href="/app/announcements" onClick={() => setMobileMenuOpen(false)}>
                  Announcements
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="justify-start">
                <Link href="/app/help-board" onClick={() => setMobileMenuOpen(false)}>
                  Help Board
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="justify-start">
                <Link href="/app/help-board/new" onClick={() => setMobileMenuOpen(false)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Post Help
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}