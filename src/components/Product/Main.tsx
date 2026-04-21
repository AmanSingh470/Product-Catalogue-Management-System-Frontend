"use client"
import ProductView from '@/components/Product/ProductView';
import Sidebar from '@/components/Product/Sidebar';

export default function Main() {
  return (
    <main className="flex min-h-0">
        <ProductView/>
        <Sidebar/>
    </main>
  )
}
