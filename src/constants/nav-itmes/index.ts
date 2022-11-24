import { BiHomeAlt } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiTarget } from 'react-icons/fi';
import { BsTruck } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
import BrushIcon from '../../assets/icons/brush';
import { FiCreditCard } from 'react-icons/fi';
import { ReactComponent as CogPlanetIcon } from '../../assets/icons/cog.svg';
import NewIcon from '../../assets/icons/new';
import { FiSettings } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { FiList } from 'react-icons/fi';
import { FiHelpCircle } from 'react-icons/fi';
import { FiShare2 } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';

export const drawerWidth = 245;

export const navItemsList = [
    {
        id: 'Dashboard',
        type: 'item',
        link: 'dashboard',
        icon: BiHomeAlt,
        label: 'Dashboard',
        badge: null,
        children: null,

    },
    {
        id: 'catalogue',
        type: 'group',
        link: 'catalogue',
        icon: FiShoppingCart,
        label: 'Catalogue',
        badge: null,
        children: [
            {
                id: 'products',
                type: 'item',
                link: 'products',
                icon: null,
                label: 'Products',
                badge: null,
                children: null
            },
        ]
    },
    {
        id: 'orders',
        type: 'item',
        link: 'orders',
        icon: FiList,
        label: 'Orders',
        badge: {
            type: 'notification',
            value: '14'

        },
        children: null
    },
    {
        id: 'customers',
        type: 'item',
        link: 'customers',
        icon: FiUser,
        label: 'Customers',
        badge: null,
        children: null
    },
    {
        id: 'marketing',
        type: 'group',
        link: 'marketing',
        icon: FiTarget,
        label: 'Marketing',
        badge: null,
        children: [
            {
                id: 'discount-codes',
                type: 'item',
                link: 'discount-codes',
                icon: null,
                label: 'Discount codes',
                badge: null,
                children: null
            },
            {
                id: 'exit-intent',
                type: 'item',
                link: 'exit-intent',
                icon: null,
                label: 'Exit intent',
                badge: null,
                children: null
            },
            {
                id: 'checkout',
                type: 'item',
                link: 'checkout',
                icon: null,
                label: 'Checkout Features',
                badge: null,
                children: null
            },
            {
                id: 'post-purchase',
                type: 'item',
                link: 'post-purchase',
                icon: null,
                label: 'Post-purchase conversion',
                badge: null,
                children: null
            },
            {
                id: 'cart-abandonment',
                type: 'item',
                link: 'cart-abandonment',
                icon: null,
                label: 'Cart abandonment',
                badge: null,
                children: null
            },
            {
                id: 'timer-checkout',
                type: 'item',
                link: 'timer-checkout',
                icon: null,
                label: 'Timer checkout',
                badge: null,
                children: null
            },
            {
                id: 'sell-on-social',
                type: 'item',
                link: 'sell-on-social',
                icon: null,
                label: 'Sell on Social',
                badge: null,
                children: null
            },
            {
                id: 'special-offer',
                type: 'item',
                link: 'special-offer',
                icon: null,
                label: 'Special Offer',
                badge: null,
                children: null
            },
            {
                id: 'seasonal-offer',
                type: 'item',
                link: 'seasional-offer',
                icon: null,
                label: 'Seasonal Offer',
                badge: null,
                children: null
            },
        ]
    },
    {
        id: 'delivery',
        type: 'item',
        link: 'delivery-options',
        icon: BsTruck,
        label: 'Delivery options',
        badge: null,
        children: null
    },
    {
        id: 'payment-options',
        type: 'item',
        link: 'payment-options',
        icon: FiDollarSign,
        label: 'Payment options',
        badge: null,
        children: null
    },
    {
        id: 'store-design',
        type: 'item',
        link: 'store-design',
        icon: BrushIcon,
        label: 'Store design',
        badge: {
            type: 'label-new',
            value: 'New'
        },
        children: null
    },
    {
        id: 'subscription',
        type: 'item',
        link: 'subscription',
        icon: FiCreditCard,
        label: 'Subscription',
        badge: null,
        children: null
    },
    {
        id: 'integrations',
        type: 'item',
        link: 'integrations',
        icon: CogPlanetIcon,
        label: 'Integrations',
        badge: null,
        children: null
    },
    {
        id: 'extensions',
        type: 'item',
        link: 'extensions',
        icon: NewIcon,
        label: 'Extensions',
        badge: null,
        children: null
    },
    {
        id: 'settings',
        type: 'item',
        link: 'settings',
        icon: FiSettings,
        label: 'Settings',
        badge: null,
        children: null
    },
    {
        id: 'log-out',
        type: 'item',
        link: 'log-out',
        icon: FiLogOut,
        label: 'Log out',
        badge: null,
        children: null
    },
]


export const navItemSecondList = [
    {
        id: 'Customer Support',
        type: 'item',
        link: '/Customer-Support',
        icon: FiHelpCircle,
        label: 'Customer Support',
        badge: null,
        children: null
    },
    {
        id: 'Shareyourshop',
        type: 'item',
        link: '/Share-your-shop',
        icon: FiShare2,
        label: 'Share your shop',
        badge: null,
        children: null
    }, {
        id: 'Viewyourshop',
        type: 'item',
        link: '/View-your-shop',
        icon: AiOutlineEye,
        label: 'View your shop',
        badge: null,
        children: null
    },

]