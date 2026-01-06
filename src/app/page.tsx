import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Gem, Mail, Send, Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  const stats = [
    {
      title: "Clientes Ativos",
      value: "1.234",
      icon: Users,
      description: "com autorização",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      title: "Produtos",
      value: "567",
      icon: Gem,
      description: "cadastrados",
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      title: "Campanhas",
      value: "89",
      icon: Mail,
      description: "enviadas",
      color: "bg-gradient-to-br from-[#9a566b] to-purple-600"
    },
    {
      title: "Envios Hoje",
      value: "45",
      icon: Send,
      description: "e-mails",
      color: "bg-gradient-to-br from-emerald-500 to-green-500"
    },
  ];

  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Bem-vindo ao <span className="text-[#9a566b]">Joias Admin</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Sistema de gestão de campanhas de e-mail para sua loja
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm font-medium text-gray-700">{stat.title}</p>
                  <p className="text-xs text-gray-500">{stat.description}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#9a566b]/10">
                <Sparkles className="w-5 h-5 text-[#9a566b]" />
              </div>
              <div>
                <CardTitle className="text-lg">Criar Nova Campanha</CardTitle>
                <CardDescription>Envie promoções para seus clientes</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Crie uma campanha promocional com produtos selecionados e envie por e-mail para todos os clientes autorizados.
            </p>
            <Button className="w-full bg-[#9a566b] hover:bg-[#9a566b]/90">
              <Sparkles className="w-4 h-4 mr-2" />
              Nova Campanha
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Ações Rápidas</CardTitle>
            <CardDescription>Gerencie sua loja</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Gerenciar Clientes
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Gem className="w-4 h-4 mr-2" />
                Adicionar Produtos
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="w-4 h-4 mr-2" />
                Ver Histórico de Envios
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle>Como Funciona</CardTitle>
          <CardDescription>
            Sistema simples de envio de promoções por e-mail
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">1</div>
                <h3 className="font-medium">Cadastre Clientes</h3>
              </div>
              <p className="text-sm text-gray-600">
                Colete e-mails de clientes com autorização para receber promoções
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-medium">2</div>
                <h3 className="font-medium">Adicione Produtos</h3>
              </div>
              <p className="text-sm text-gray-600">
                Cadastre produtos com imagens, descrição e preço para usar nas campanhas
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#9a566b]/10 text-[#9a566b] flex items-center justify-center text-sm font-medium">3</div>
                <h3 className="font-medium">Envie Campanhas</h3>
              </div>
              <p className="text-sm text-gray-600">
                Crie e envie promoções visuais por e-mail de forma simples e profissional
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}