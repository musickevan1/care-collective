#!/bin/bash

# CARE Collective Setup Script
# This script helps set up the development environment

echo "🏥 CARE Collective Setup Script"
echo "==============================="

# Check Node.js version
echo "📋 Checking Node.js version..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ required. Current: $(node -v)"
    exit 1
fi
echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if environment file exists
if [ ! -f .env.local ]; then
    echo "🔧 Creating environment file..."
    cp .env.example .env.local
    echo "⚠️  Please update .env.local with your Supabase credentials"
else
    echo "✅ Environment file exists"
fi

# Check CLI tools
echo "🛠️  Checking CLI tools..."

if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI is installed"
    if gh auth status &> /dev/null; then
        echo "✅ GitHub CLI is authenticated"
    else
        echo "⚠️  GitHub CLI not authenticated. Run: gh auth login"
    fi
else
    echo "❌ GitHub CLI not found. Install from: https://cli.github.com/"
fi

if command -v vercel &> /dev/null; then
    echo "✅ Vercel CLI is installed"
    if vercel whoami &> /dev/null; then
        echo "✅ Vercel CLI is authenticated"
    else
        echo "⚠️  Vercel CLI not authenticated. Run: vercel login"
    fi
else
    echo "⚠️  Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if git repository is set up
if [ -d .git ]; then
    echo "✅ Git repository initialized"
    if git remote get-url origin &> /dev/null; then
        echo "✅ Git remote configured"
    else
        echo "⚠️  No git remote configured. Run setup commands from README.md"
    fi
else
    echo "❌ Git repository not initialized"
fi

echo ""
echo "🚀 Next Steps:"
echo "1. Update .env.local with your Supabase credentials"
echo "2. Set up your Supabase database with the migrations in supabase/migrations/"
echo "3. Run 'npm run dev' to start development server"
echo "4. If not done already, authenticate CLI tools:"
echo "   - gh auth login"
echo "   - vercel login"
echo "5. Create GitHub repository: gh repo create care-collective --public"
echo "6. Deploy to Vercel: vercel"
echo ""
echo "📚 Check README.md and CLAUDE.md for detailed instructions"