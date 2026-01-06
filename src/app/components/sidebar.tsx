import Link from "next/link";
import { Home, Users, Package, Mail, Send, LayoutDashboard } from "lucide-react";

const Sidebar = () => {
    const navItems = [
        { href: "/", icon: LayoutDashboard, label: "Dashboard" },
        { href: "/clientes", icon: Users, label: "Clientes" },
        { href: "/produtos", icon: Package, label: "Produtos" },
        { href: "/campanhas", icon: Mail, label: "Campanhas" },
    ];

    return (
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <div className="flex flex-col grow border-r border-white/10 bg-[#0f1115] text-white">
                <div className="relative overflow-hidden pt-8 pb-6 px-6">
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#9a566b] via-[#c48c90] to-[#9a566b]"></div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-bold tracking-widest text-[#9a566b] uppercase">Painel</span>
                        <span className="text-2xl font-serif font-black tracking-tight text-white leading-none">GLAMOUR</span>
                    </div>
                    <div className="mt-1 h-px w-8 bg-[#9a566b]"></div>
                </div>

                <div className="mt-4 grow flex flex-col">
                    <nav className="flex-1 px-4 space-y-1.5">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-200 ease-in-out border border-transparent hover:border-white/10 shadow-sm"
                            >
                                <item.icon className="mr-3 h-4 w-4 text-gray-500 group-hover:text-[#9a566b] transition-colors" />
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="shrink-0 p-4 mx-4 mb-6 rounded-xl bg-linear-to-br from-white/5 to-transparent border border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-[#9a566b] flex items-center justify-center text-xs font-bold shadow-lg shadow-[#9a566b]/20">
                            AD
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xs font-semibold text-white">Usuário Admin</p>
                            <p className="text-[10px] text-gray-500 font-medium">Versão 1.0.4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;