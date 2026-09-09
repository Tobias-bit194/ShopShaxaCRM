import React, { useState } from 'react';
import { Sidebar } from '../../../../widgets/sidebar/ui/Sidebar';
import { Header } from '../../../../widgets/header/ui/Header';
import {
    Edit,
    Calendar,
    Eye,
    Wand2,
    Edit3,
    Share2,
    Copy,
    PlusCircle,
    HelpCircle,
    EyeOff
} from 'lucide-react';

export const ProfileUpdate: React.FC = () => {
    // Parollarni ko'rsatish/yashirish state'lari
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showReNew, setShowReNew] = useState(false);
    const [showProfilePassword, setShowProfilePassword] = useState(false);

    return (
        <div className="flex bg-[#f8fafc] min-h-screen font-sans">
            {/* 1. Фиксированный сайдбар слева */}
            <Sidebar />

            {/* 2. Основная часть (Хедер + Контент) */}
            <div className="flex-1 flex flex-col min-w-0">
                <Header />

                <main className="p-8 overflow-y-auto">
                    <h1 className="text-xl font-bold text-gray-800 mb-6">About section</h1>
 
                    <div className="flex flex-col lg:flex-row gap-6 items-start">
                        {/* ================= LEFT SIDEBAR (Profile & Password) ================= */}
                        <div className="flex flex-col gap-5 w-full lg:w-[340px]">
                            {/* 1. Profile Card */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold text-gray-800 text-base">Profile</h3>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <button type="button" className="p-1 hover:bg-gray-100 rounded-md transition">
                                            <Edit3 size={16} />
                                        </button>
                                        <button type="button" className="p-1 hover:bg-gray-100 rounded-md transition">
                                            <Share2 size={16} />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center text-center">
                                    <img
                                        src=""
                                        alt="Wade Warren"
                                        className="w-20 h-20 rounded-full object-cover mb-3"
                                    />
                                    <h4 className="font-bold text-gray-900 text-base">Wade Warren</h4>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-0.5">
                                        <span>wade.warren@example.com</span>
                                        <Copy size={13} className="cursor-pointer hover:text-gray-600" />
                                    </div>

                                    <span className="text-[11px] text-gray-400 mt-4">Linked with Social media</span>

                                    {/* Social Links */}
                                    <div className="flex items-center justify-center gap-3 mt-2 text-[10px] font-medium text-indigo-400">
                                        <div className="flex items-center gap-1 cursor-pointer">
                                            <span className="text-red-500 font-bold text-sm">G</span>
                                            <span>🔗Linked</span>
                                        </div>
                                        <div className="flex items-center gap-1 cursor-pointer">
                                            <span className="text-blue-600 font-bold text-sm">f</span>
                                            <span>🔗Linked</span>
                                        </div>
                                        <div className="flex items-center gap-1 cursor-pointer">
                                            <span className="text-black font-bold text-sm">X</span>
                                            <span>🔗Linked</span>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 mt-4 hover:bg-gray-50 transition"
                                    >
                                        <PlusCircle size={14} />
                                        Social media
                                    </button>
                                </div>
                            </div>

                            {/* 2. Change Password Card */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold text-gray-800 text-base">Change Password</h3>
                                    <a href="#" className="flex items-center gap-1 text-xs text-indigo-400 hover:underline">
                                        Need help <HelpCircle size={13} />
                                    </a>
                                </div>

                                <form className="flex flex-col gap-3.5" onSubmit={(e) => e.preventDefault()}>
                                    {/* Current Password */}
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-semibold text-gray-600">Current Password</label>
                                        <div className="relative flex items-center">
                                            <input
                                                type={showCurrent ? "text" : "password"}
                                                placeholder="Enter password"
                                                className="w-full bg-[#f8fafc] border border-gray-100 rounded-lg py-2.5 px-3 pr-9 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#48A375] focus:bg-white transition"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowCurrent(!showCurrent)}
                                                className="absolute right-3 text-gray-400 hover:text-gray-600"
                                            >
                                                {showCurrent ? <Eye size={15} /> : <EyeOff size={15} />}
                                            </button>
                                        </div>
                                        <a href="#" className="text-[11px] text-indigo-400 hover:underline mt-0.5">
                                            Forgot Current Password? Click here
                                        </a>
                                    </div>

                                    {/* New Password */}
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-semibold text-gray-600">New Password</label>
                                        <div className="relative flex items-center">
                                            <input
                                                type={showNew ? "text" : "password"}
                                                placeholder="Enter password"
                                                className="w-full bg-[#f8fafc] border border-gray-100 rounded-lg py-2.5 px-3 pr-9 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#48A375] focus:bg-white transition"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowNew(!showNew)}
                                                className="absolute right-3 text-gray-400 hover:text-gray-600"
                                            >
                                                {showNew ? <Eye size={15} /> : <EyeOff size={15} />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Re-enter Password */}
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-semibold text-gray-600">Re-enter Password</label>
                                        <div className="relative flex items-center">
                                            <input
                                                type={showReNew ? "text" : "password"}
                                                placeholder="Enter password"
                                                className="w-full bg-[#f8fafc] border border-gray-100 rounded-lg py-2.5 px-3 pr-9 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#48A375] focus:bg-white transition"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowReNew(!showReNew)}
                                                className="absolute right-3 text-gray-400 hover:text-gray-600"
                                            >
                                                {showReNew ? <Eye size={15} /> : <EyeOff size={15} />}
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#48A375] hover:bg-[#3d8c64] text-white font-semibold py-2.5 rounded-lg text-xs transition mt-2"
                                    >
                                        Save Change
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* ================= RIGHT MAIN SECTION (Profile Form) ================= */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex-1 w-full">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="font-bold text-gray-800 text-lg">Profile Update</h2>
                                <button
                                    type="button"
                                    className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
                                >
                                    <Edit size={14} />
                                    Edit
                                </button>
                            </div>

                            {/* Profile Photo Upload */}
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                                    alt="Avatar"
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        className="bg-[#48A375] hover:bg-[#3d8c64] text-white font-medium px-4 py-2 rounded-lg text-xs transition"
                                    >
                                        Upload New
                                    </button>
                                    <button
                                        type="button"
                                        className="border border-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg text-xs hover:bg-gray-50 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>

                            {/* Form Fields */}
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                                {/* First Name */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-gray-600">First Name</label>
                                    <input
                                        type="text"
                                        defaultValue="Wade"
                                        className="w-full bg-[#f8fafc] border border-gray-100 rounded-lg py-2.5 px-3.5 text-xs font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#48A375] focus:bg-white transition"
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-gray-600">Last Name</label>
                                    <input
                                        type="text"
                                        defaultValue="Warren"
                                        className="w-full bg-[#f8fafc] border border-gray-100 rounded-lg py-2.5 px-3.5 text-xs font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#48A375] focus:bg-white transition"
                                    />
                                </div>

                                {/* Password */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-gray-600">Password</label>
                                    <div className="relative flex items-center">
                                        <input
                                            type={showProfilePassword ? "text" : "password"}
                                            defaultValue="************"
                                            className="w-full bg-[#f8fafc] border border-gray-100 rounded-lg py-2.5 px-3.5 pr-10 text-xs font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#48A375] focus:bg-white transition"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowProfilePassword(!showProfilePassword)}
                                            className="absolute right-3 text-gray-400 hover:text-gray-600"
                                        >
                                            {showProfilePassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-gray-600">Phone Number</label>
                                    <div className="flex gap-2">
                                        <div className="flex items-center justify-between bg-[#f8fafc] border border-gray-100 rounded-lg px-2.5 min-w-[70px]">
                                            <span className="text-sm">🇺🇸</span>
                                            <span className="text-[10px] text-gray-400 ml-1">▼</span>
                                        </div>
                                        <input
                                            type="text"
                                            defaultValue="(406) 555-0120"
                                            className="w-full bg-[#f8fafc] border border-gray-100 rounded-lg py-2.5 px-3.5 text-xs font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#48A375] focus:bg-white transition"
                                        />
                                    </div>
                                </div>

                                {/* E-mail */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-gray-600">E-mail</label>
                                    <input
                                        type="email"
                                        defaultValue="wade.warren@example.com"
                                        className="w-full bg-[#f8fafc] border border-gray-100 rounded-lg py-2.5 px-3.5 text-xs font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#48A375] focus:bg-white transition"
                                    />
                                </div>

                                {/* Date of Birth */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-gray-600">Date of Birth</label>
                                    <div className="relative flex items-center">
                                        <input
                                            type="text"
                                            defaultValue="12- January- 1999"
                                            className="w-full bg-[#f8fafc] border border-gray-100 rounded-lg py-2.5 px-3.5 pr-10 text-xs font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#48A375] focus:bg-white transition"
                                        />
                                        <Calendar size={16} className="absolute right-3 text-gray-400 cursor-pointer hover:text-gray-600" />
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="md:col-span-2 flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-gray-600">Location</label>
                                    <input
                                        type="text"
                                        defaultValue="2972 Westheimer Rd. Santa Ana, Illinois 85486"
                                        className="w-full bg-[#f8fafc] border border-gray-100 rounded-lg py-2.5 px-3.5 text-xs font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#48A375] focus:bg-white transition"
                                    />
                                </div>

                                {/* Credit Card */}
                                <div className="md:col-span-2 flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-gray-600">Credit Card</label>
                                    <div className="relative flex items-center">
                                        <div className="absolute left-3 flex items-center gap-1">
                                            <div className="w-3.5 h-3.5 bg-red-500 rounded-full opacity-90"></div>
                                            <div className="w-3.5 h-3.5 bg-amber-500 rounded-full -ml-2.5 opacity-90"></div>
                                        </div>
                                        <input
                                            type="text"
                                            defaultValue="843-4359-4444"
                                            className="w-full bg-[#f8fafc] border border-gray-100 rounded-lg py-2.5 pl-9 pr-8 text-xs font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#48A375] focus:bg-white transition"
                                        />
                                        <span className="absolute right-3 text-[10px] text-gray-400 cursor-pointer">▼</span>
                                    </div>
                                </div>

                                {/* Biography */}
                                <div className="md:col-span-2 flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-gray-600">Biography</label>
                                    <div className="relative">
                                        <textarea
                                            rows={4}
                                            placeholder="Enter a biography about you"
                                            className="w-full bg-[#f8fafc] border border-gray-100 rounded-lg p-3.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#48A375] focus:bg-white transition resize-none"
                                        />
                                        <div className="absolute bottom-3 right-3 flex items-center gap-2 text-gray-400">
                                            <Edit3 size={15} className="cursor-pointer hover:text-gray-600" />
                                            <Wand2 size={15} className="cursor-pointer hover:text-gray-600" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};