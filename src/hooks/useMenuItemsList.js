import DisplayLanguageHandler from '../translations/translations';

const menuItemsList = () => {
    const text = DisplayLanguageHandler();
    return {    
        aboutMe: { 
            iconName: 'icon-user',
            itemName: text.MenuItem_itemName_AboutMe,
            linkName: '/',
        },
        stack: { 
            iconName: 'icon-rocket',
            itemName: text.MenuItem_itemName_Stack,
            linkName: '/stack',
        },
        gallery: { 
            iconName: 'icon-image',
            itemName: text.MenuItem_itemName_Gallery,
            linkName: '/gallery',
        },
        webdev: { 
            iconName: 'icon-laptop',
            itemName: text.MenuItem_itemName_WebDev,
            linkName: '/',
        },
        contact: { 
            iconName: 'icon-paper-plane',
            itemName: text.MenuItem_itemName_Contact,
            linkName: '/contact',
        },
    }
}

export default menuItemsList;