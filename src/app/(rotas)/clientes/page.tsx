"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
    Users,
    Search,
    UserPlus,
    Mail,
    Phone,
    CheckCircle2,
    XCircle,
    Filter,
    Download,
    Edit,
    Trash2,
    Plus,
    Eye,
    Loader2,
    Save
} from "lucide-react";
import { useState, useEffect } from "react";

type Cliente = {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    autorizado: boolean;
    dataCadastro: string;
};

const clientesIniciais: Cliente[] = [
    { id: 1, nome: "Ana Silva", email: "ana@email.com", telefone: "(11) 99999-9999", autorizado: true, dataCadastro: "2024-01-15" },
    { id: 2, nome: "Carlos Santos", email: "carlos@email.com", telefone: "(21) 98888-8888", autorizado: true, dataCadastro: "2024-01-20" },
    { id: 3, nome: "Beatriz Oliveira", email: "beatriz@email.com", telefone: "(31) 97777-7777", autorizado: false, dataCadastro: "2024-02-05" },
    { id: 4, nome: "Ricardo Mendes", email: "ricardo@email.com", telefone: "(41) 96666-6666", autorizado: true, dataCadastro: "2024-02-10" },
    { id: 5, nome: "Fernanda Costa", email: "fernanda@email.com", telefone: "(51) 95555-5555", autorizado: true, dataCadastro: "2024-02-12" },
];

export default function ClientesPage() {
    const [clientes, setClientes] = useState<Cliente[]>(clientesIniciais);
    const [novoCliente, setNovoCliente] = useState({
        nome: "",
        email: "",
        telefone: "",
        autorizado: true
    });
    const [busca, setBusca] = useState("");
    const [modoAdicao, setModoAdicao] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [clienteEditando, setClienteEditando] = useState<number | null>(null);
    const [clienteEditado, setClienteEditado] = useState<Partial<Cliente>>({});

    const clientesAutorizados = clientes.filter(c => c.autorizado).length;
    const totalClientes = clientes.length;

    const clientesFiltrados = clientes.filter(cliente =>
        cliente.nome.toLowerCase().includes(busca.toLowerCase()) ||
        cliente.email.toLowerCase().includes(busca.toLowerCase()) ||
        cliente.telefone.includes(busca)
    );

    const adicionarCliente = () => {
        if (!novoCliente.nome.trim() || !novoCliente.email.trim()) {
            alert("Nome e e-mail são obrigatórios!");
            return;
        }

        if (!novoCliente.email.includes("@")) {
            alert("Por favor, insira um e-mail válido!");
            return;
        }

        setCarregando(true);

        setTimeout(() => {
            const novoId = clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) + 1 : 1;
            const novo: Cliente = {
                id: novoId,
                nome: novoCliente.nome.trim(),
                email: novoCliente.email.trim().toLowerCase(),
                telefone: novoCliente.telefone.trim(),
                autorizado: novoCliente.autorizado,
                dataCadastro: new Date().toLocaleDateString('pt-BR')
            };

            setClientes([...clientes, novo]);
            setNovoCliente({ nome: "", email: "", telefone: "", autorizado: true });
            setModoAdicao(false);
            setCarregando(false);
        }, 500);
    };

    const removerCliente = (id: number) => {
        if (confirm("Tem certeza que deseja remover este cliente?")) {
            setClientes(clientes.filter(cliente => cliente.id !== id));
        }
    };

    const iniciarEdicao = (cliente: Cliente) => {
        setClienteEditando(cliente.id);
        setClienteEditado({ ...cliente });
    };

    const salvarEdicao = (id: number) => {
        if (clienteEditado.nome && clienteEditado.email && clienteEditado.email.includes("@")) {
            setClientes(clientes.map(cliente =>
                cliente.id === id ? { ...cliente, ...clienteEditado } as Cliente : cliente
            ));
            setClienteEditando(null);
            setClienteEditado({});
        } else {
            alert("Nome e e-mail válido são obrigatórios!");
        }
    };

    const cancelarEdicao = () => {
        setClienteEditando(null);
        setClienteEditado({});
    };

    const toggleAutorizacao = (id: number) => {
        setClientes(clientes.map(cliente =>
            cliente.id === id ? { ...cliente, autorizado: !cliente.autorizado } : cliente
        ));
    };

    const formatarTelefone = (telefone: string) => {
        const nums = telefone.replace(/\D/g, '');
        if (nums.length === 11) {
            return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
        } else if (nums.length === 10) {
            return `(${nums.slice(0, 2)}) ${nums.slice(2, 6)}-${nums.slice(6)}`;
        }
        return telefone;
    };

    return (
        <div className="p-6 space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <Users className="w-8 h-8 text-[#9a566b]" />
                        Gestão de Clientes
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Gerencie sua base de clientes para envio de campanhas promocionais
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">{totalClientes}</div>
                            <div className="text-sm text-gray-500">Total</div>
                        </div>
                        <div className="h-8 w-px bg-gray-200" />
                        <div className="text-right">
                            <div className="text-2xl font-bold text-emerald-600">{clientesAutorizados}</div>
                            <div className="text-sm text-gray-500">Autorizados</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="border border-gray-200 shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <UserPlus className="w-5 h-5" />
                            {modoAdicao ? "Novo Cliente" : "Adicionar Cliente"}
                        </CardTitle>
                        <CardDescription>
                            {modoAdicao ? "Preencha os dados do novo cliente" : "Adicione novos clientes à sua base"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {modoAdicao ? (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="nome">Nome Completo *</Label>
                                    <Input
                                        id="nome"
                                        value={novoCliente.nome}
                                        onChange={(e) => setNovoCliente({ ...novoCliente, nome: e.target.value })}
                                        placeholder="Ex: Maria da Silva"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">E-mail *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={novoCliente.email}
                                        onChange={(e) => setNovoCliente({ ...novoCliente, email: e.target.value })}
                                        placeholder="Ex: cliente@email.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="telefone">Telefone</Label>
                                    <Input
                                        id="telefone"
                                        value={novoCliente.telefone}
                                        onChange={(e) => setNovoCliente({ ...novoCliente, telefone: e.target.value })}
                                        placeholder="Ex: (11) 99999-9999"
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="autorizado"
                                        checked={novoCliente.autorizado}
                                        onCheckedChange={(checked) =>
                                            setNovoCliente({ ...novoCliente, autorizado: checked as boolean })
                                        }
                                    />
                                    <Label htmlFor="autorizado" className="cursor-pointer">
                                        Cliente autorizado a receber promoções
                                    </Label>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <Button
                                        onClick={adicionarCliente}
                                        className="flex-1 bg-[#9a566b] hover:bg-[#9a566b]/90"
                                        disabled={carregando}
                                    >
                                        {carregando ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Salvando...
                                            </>
                                        ) : (
                                            <>
                                                <Save className="w-4 h-4 mr-2" />
                                                Salvar Cliente
                                            </>
                                        )}
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setModoAdicao(false);
                                            setNovoCliente({ nome: "", email: "", telefone: "", autorizado: true });
                                        }}
                                    >
                                        Cancelar
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <p className="text-sm text-gray-600">
                                    Adicione clientes à sua base para enviar campanhas promocionais de joias e semijoias.
                                </p>
                                <Button
                                    onClick={() => setModoAdicao(true)}
                                    className="w-full bg-[#9a566b] hover:bg-[#9a566b]/90"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Adicionar Novo Cliente
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Filter className="w-5 h-5" />
                            Busca e Filtros
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="busca">Buscar Clientes</Label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                    <Input
                                        id="busca"
                                        placeholder="Buscar por nome, e-mail ou telefone..."
                                        value={busca}
                                        onChange={(e) => setBusca(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-2">
                                <Badge variant="secondary" className="gap-1">
                                    <Users className="w-3 h-3" />
                                    {clientesFiltrados.length} encontrados
                                </Badge>

                                <Badge variant="outline" className="gap-1">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                    {clientesFiltrados.filter(c => c.autorizado).length} autorizados
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="border border-gray-200 shadow-sm">
                <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <CardTitle>Lista de Clientes</CardTitle>
                            <CardDescription>
                                {clientesFiltrados.length} {clientesFiltrados.length === 1 ? 'cliente encontrado' : 'clientes encontrados'}
                            </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="gap-2">
                                <Download className="w-4 h-4" />
                                Exportar
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[250px]">Nome</TableHead>
                                    <TableHead>E-mail</TableHead>
                                    <TableHead>Telefone</TableHead>
                                    <TableHead>Autorizado</TableHead>
                                    <TableHead>Data Cadastro</TableHead>
                                    <TableHead className="text-right">Ações</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {clientesFiltrados.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                                            Nenhum cliente encontrado
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    clientesFiltrados.map((cliente) => (
                                        <TableRow key={cliente.id} className="group hover:bg-gray-50/50">
                                            <TableCell className="font-medium">
                                                {clienteEditando === cliente.id ? (
                                                    <Input
                                                        value={clienteEditado.nome || cliente.nome}
                                                        onChange={(e) => setClienteEditado({ ...clienteEditado, nome: e.target.value })}
                                                        className="w-full"
                                                    />
                                                ) : (
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#9a566b]/20 to-purple-500/20 flex items-center justify-center">
                                                            <Users className="w-4 h-4 text-[#9a566b]" />
                                                        </div>
                                                        {cliente.nome}
                                                    </div>
                                                )}
                                            </TableCell>

                                            <TableCell>
                                                {clienteEditando === cliente.id ? (
                                                    <Input
                                                        type="email"
                                                        value={clienteEditado.email || cliente.email}
                                                        onChange={(e) => setClienteEditado({ ...clienteEditado, email: e.target.value })}
                                                        className="w-full"
                                                    />
                                                ) : (
                                                    <div className="flex items-center gap-2">
                                                        <Mail className="w-4 h-4 text-gray-400" />
                                                        {cliente.email}
                                                    </div>
                                                )}
                                            </TableCell>

                                            <TableCell>
                                                {clienteEditando === cliente.id ? (
                                                    <Input
                                                        value={clienteEditado.telefone || cliente.telefone}
                                                        onChange={(e) => setClienteEditado({ ...clienteEditado, telefone: e.target.value })}
                                                        className="w-full"
                                                    />
                                                ) : (
                                                    <div className="flex items-center gap-2">
                                                        <Phone className="w-4 h-4 text-gray-400" />
                                                        {cliente.telefone}
                                                    </div>
                                                )}
                                            </TableCell>

                                            <TableCell>
                                                {clienteEditando === cliente.id ? (
                                                    <Checkbox
                                                        checked={clienteEditado.autorizado ?? cliente.autorizado}
                                                        onCheckedChange={(checked) =>
                                                            setClienteEditado({ ...clienteEditado, autorizado: checked as boolean })
                                                        }
                                                    />
                                                ) : cliente.autorizado ? (
                                                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1">
                                                        <CheckCircle2 className="w-3 h-3" />
                                                        Sim
                                                    </Badge>
                                                ) : (
                                                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 gap-1">
                                                        <XCircle className="w-3 h-3" />
                                                        Não
                                                    </Badge>
                                                )}
                                            </TableCell>

                                            <TableCell className="text-gray-500">
                                                {cliente.dataCadastro}
                                            </TableCell>

                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    {clienteEditando === cliente.id ? (
                                                        <>
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                onClick={() => salvarEdicao(cliente.id)}
                                                                className="h-8 gap-1"
                                                            >
                                                                <Save className="w-3 h-3" />
                                                                Salvar
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                onClick={cancelarEdicao}
                                                                className="h-8"
                                                            >
                                                                Cancelar
                                                            </Button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                onClick={() => iniciarEdicao(cliente)}
                                                                className="h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                                            >
                                                                <Edit className="w-3 h-3" />
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                onClick={() => toggleAutorizacao(cliente.id)}
                                                                className="h-8"
                                                                title={cliente.autorizado ? "Desautorizar" : "Autorizar"}
                                                            >
                                                                {cliente.autorizado ? (
                                                                    <XCircle className="w-3 h-3 text-gray-500" />
                                                                ) : (
                                                                    <CheckCircle2 className="w-3 h-3 text-gray-500" />
                                                                )}
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                onClick={() => removerCliente(cliente.id)}
                                                                className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                                                            >
                                                                <Trash2 className="w-3 h-3" />
                                                            </Button>
                                                        </>
                                                    )}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}