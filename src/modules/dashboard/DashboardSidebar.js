import { IconCampaign, IconDarkmode, IconDashboard, IconLogout, IconPayment, IconProfile, IconWithdraw } from 'components/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
const sidebarLinks = [
    {
        icon: <IconDashboard></IconDashboard>,
        title: "Dashboard",
        url: '/'
    },
    {
        icon: <IconCampaign></IconCampaign>,
        title: "Campaign",
        url: '/campaign'
    },
    {
        icon: <IconPayment></IconPayment>,
        title: "Payment",
        url: '/payment'
    },
    {
        icon: <IconWithdraw></IconWithdraw>,
        title: "Withdraw",
        url: '/withdraw'
    },
    {
        icon: <IconProfile></IconProfile>,
        title: "Profile",
        url: '/profile'
    },
    {
        icon: <IconLogout></IconLogout>,
        title: "Logout",
        url: '#',
        onclick: () => {}
    },
    {
        icon: <IconDarkmode></IconDarkmode>,
        title: "Light/Dark",
        url: '#',
        onClick: () => {}
    }

];

const DashboardSidebar = () => {
    return (
        <nav className='flex-shrink-0 px-[14px] py-10 w-full lg:w-[76px] bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] rounded-3xl flex flex-col'>
            {sidebarLinks.map(link => (
                <NavLink to={link.url} key={link.title} className='flex items-center text-icon-color lg:mb-8 gap-x-5 lg:w-12 lg:h-12 lg:justify-center lg:rounded-lg last:mt-auto last:bg-white last:shadow-sdprimary'>
                    <span>
                        {link.icon}
                    </span>
                    <span className='lg:hidden'>{link.title}</span>
                </NavLink>
            ))}
        </nav>
    );
};

export default DashboardSidebar;