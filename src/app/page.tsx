import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Gem, Mail, Send, Sparkles, ArrowRight, LayoutDashboard, Package } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const stats = [
    {
      title: "Clientes Ativos",
      value: "1.234",
      icon: Users,
      description: "com autorização",
      color: "bg-linear-to-br from-blue-500 to-blue-600"
    },
    {
      title: "Produtos",
      value: "567",
      icon: Gem,
      description: "cadastrados",
      color: "bg-linear-to-br from-purple-500 to-pink-500"
    },
    {
      title: "Campanhas",
      value: "89",
      icon: Mail,
      description: "enviadas",
      color: "bg-linear-to-br from-[#9a566b] to-[#9a566b]/80"
    }
  ];

  return (
    <div className="p-8 space-y-10 animate-fade-in max-w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Painel <span className="text-[#9a566b]">Administrativo</span>
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Gerencie suas campanhas e clientes com simplicidade e elegância.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-white border border-gray-200/60 shadow-lg shadow-gray-200/40 hover:shadow-xl hover:border-[#9a566b]/20 transition-all duration-300 group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <stat.icon className="w-24 h-24 -mr-8 -mt-8" />
            </div>
            <CardContent className="pt-8 pb-8 flex items-center justify-between relative z-10">
              <div className="space-y-1">
                <p className="text-4xl font-black text-gray-900 tracking-tighter">{stat.value}</p>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.title}</p>
                <p className="text-xs text-gray-400 font-medium">{stat.description}</p>
              </div>
              <div className={`p-4 rounded-2xl ${stat.color} shadow-lg shadow-black/10 transition-transform duration-300 group-hover:scale-110`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white border border-gray-200/60 shadow-lg shadow-gray-200/30 group hover:translate-y-[-4px] hover:border-[#9a566b]/20 transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold">Clientes</CardTitle>
                <CardDescription>Banco de dados</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Gerencie sua lista de contatos, visualize permissões de envio e importe novos leads para sua base.
            </p>
            <Link href="/clientes" className="block w-full">
              <Button variant="outline" className="w-full border-gray-200 hover:border-[#9a566b] hover:text-[#9a566b] hover:bg-[#9a566b]/5 font-semibold group-hover:shadow-md transition-all">
                Acessar Clientes
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200/60 shadow-lg shadow-gray-200/30 group hover:translate-y-[-4px] hover:border-[#9a566b]/20 transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-50 group-hover:bg-purple-100 transition-colors">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold">Produtos</CardTitle>
                <CardDescription>Catálogo de itens</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Cadastre e organize as peças que serão destaque em suas campanhas promocionais e informativas.
            </p>
            <Link href="/produtos" className="block w-full">
              <Button variant="outline" className="w-full border-gray-200 hover:border-[#9a566b] hover:text-[#9a566b] hover:bg-[#9a566b]/5 font-semibold group-hover:shadow-md transition-all">
                Gerenciar Produtos
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200/60 shadow-lg shadow-gray-200/30 group hover:translate-y-[-4px] hover:border-[#9a566b]/20 transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-pink-50 group-hover:bg-pink-100 transition-colors">
                <Mail className="w-6 h-6 text-[#9a566b]" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold">Campanhas</CardTitle>
                <CardDescription>Envio e Histórico</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Acompanhe o desempenho dos seus envios passados ou inicie uma nova comunicação agora mesmo.
            </p>
            <Link href="/campanhas" className="block w-full">
              <Button variant="outline" className="w-full border-gray-200 hover:border-[#9a566b] hover:text-[#9a566b] hover:bg-[#9a566b]/5 font-semibold group-hover:shadow-md transition-all">
                Ver Campanhas
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}