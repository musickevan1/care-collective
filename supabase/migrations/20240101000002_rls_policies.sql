-- Row Level Security Policies

-- Profiles policies
CREATE POLICY "Users can view all profiles" ON profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
    FOR UPDATE USING (auth.uid() = id);

-- Help items policies
CREATE POLICY "Anyone can view published help items" ON help_items
    FOR SELECT USING (status = 'active');

CREATE POLICY "Users can insert their own help items" ON help_items
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own help items" ON help_items
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own help items" ON help_items
    FOR DELETE USING (auth.uid() = user_id);

-- Announcements policies
CREATE POLICY "Anyone can view published announcements" ON announcements
    FOR SELECT USING (published = true);

CREATE POLICY "Admins can view all announcements" ON announcements
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can insert announcements" ON announcements
    FOR INSERT WITH CHECK (
        auth.uid() = user_id AND
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can update announcements" ON announcements
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can delete announcements" ON announcements
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Events policies
CREATE POLICY "Anyone can view published events" ON events
    FOR SELECT USING (status = 'published');

CREATE POLICY "Users can insert their own events" ON events
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own events" ON events
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own events" ON events
    FOR DELETE USING (auth.uid() = user_id);

-- Event attendees policies
CREATE POLICY "Users can view event attendees" ON event_attendees
    FOR SELECT USING (true);

CREATE POLICY "Users can insert their own attendance" ON event_attendees
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own attendance" ON event_attendees
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own attendance" ON event_attendees
    FOR DELETE USING (auth.uid() = user_id);

-- Help responses policies
CREATE POLICY "Help item owners can view all responses to their items" ON help_responses
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM help_items 
            WHERE id = help_item_id AND user_id = auth.uid()
        )
    );

CREATE POLICY "Users can view their own responses" ON help_responses
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own responses" ON help_responses
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own responses" ON help_responses
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Help item owners can update responses to their items" ON help_responses
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM help_items 
            WHERE id = help_item_id AND user_id = auth.uid()
        )
    );

-- Function to handle user creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION handle_new_user();