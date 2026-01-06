import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Gem, Mail, Send } from "lucide-react";

export default function Home() {
  const stats = [
    { title: "Clientes Ativos", value: "1.234", icon: Users, change: "+12%", color: "text-blue-600" },
    { title: "Produtos", value: "567", icon: Gem, change: "+5%", color: "text-purple-600" },
    { title: "Campanhas", value: "89", icon: Mail, change: "+23%", color: "text-green-600" },
    { title: "Envios Hoje", value: "45", icon: Send, change: "+8%", color: "text-yellow-600" },
  ];

  return (
    <div className="p-6 w-full mx-auto space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change} em relação ao mês passado</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Visão Geral</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Bem-vindo ao sistema de gestão de campanhas da loja de joias. Aqui você pode gerenciar clientes, produtos e enviar campanhas promocionais.
            </p>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-sm">Campanha &quot;Verão Brillante&quot; enviada para 1.234 clientes</li>
              <li className="text-sm">Novo produto &quot;Colar de Pérolas&quot; adicionado</li>
              <li className="text-sm">150 novos clientes autorizaram recebimento</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}