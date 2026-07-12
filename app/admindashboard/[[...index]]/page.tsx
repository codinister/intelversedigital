'use client'
import { NextStudio } from 'next-sanity/studio';
import clientConfig from '@/state/sanity/client.config';

const AdminDashboard = () => {
  return (
    <div className="mt-10">
      <NextStudio config={clientConfig} />
    </div>
  );
};

export default AdminDashboard;
