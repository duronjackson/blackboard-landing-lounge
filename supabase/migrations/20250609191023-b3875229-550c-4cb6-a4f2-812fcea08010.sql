
-- Create the contacts table with proper structure
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (optional - allows public access for contact forms)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert contact submissions
CREATE POLICY "Allow public contact submissions" ON public.contacts
FOR INSERT TO anon
WITH CHECK (true);

-- Create a policy to allow authenticated users to view contacts (for admin purposes)
CREATE POLICY "Allow authenticated users to view contacts" ON public.contacts
FOR SELECT TO authenticated
USING (true);
