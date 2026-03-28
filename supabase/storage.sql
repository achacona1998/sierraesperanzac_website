
-- Storage Configuration

-- Create a bucket for portfolio images
insert into storage.buckets (id, name, public)
values ('portfolio', 'portfolio', true)
on conflict (id) do nothing;

-- Storage Policies for 'portfolio' bucket

-- Allow public access to view files in the 'portfolio' bucket
create policy "Public Portfolio Images"
  on storage.objects for select
  using ( bucket_id = 'portfolio' );

-- Allow authenticated users (admins) to upload files to 'portfolio' bucket
create policy "Admins can upload portfolio images"
  on storage.objects for insert
  with check ( bucket_id = 'portfolio' and auth.role() = 'authenticated' );

-- Allow authenticated users (admins) to update files in 'portfolio' bucket
create policy "Admins can update portfolio images"
  on storage.objects for update
  with check ( bucket_id = 'portfolio' and auth.role() = 'authenticated' );

-- Allow authenticated users (admins) to delete files in 'portfolio' bucket
create policy "Admins can delete portfolio images"
  on storage.objects for delete
  using ( bucket_id = 'portfolio' and auth.role() = 'authenticated' );
