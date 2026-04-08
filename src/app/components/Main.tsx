"use client"
import ProductView from '@/app/components/ProductView';
import Sidebar from '@/app/components/Sidebar';

export default function Main() {
  return (
    <main className="flex min-h-0">
        <ProductView/>
        <Sidebar/>
    </main>
  )
}
