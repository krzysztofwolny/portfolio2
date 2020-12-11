import DisplayLanguageHandler from '../translations/translations';

const menuItemsList = () => {
    const text = DisplayLanguageHandler();
    return {    
        aboutMe: { 
            iconName: 'icon-user',
            itemName: text.MenuItem_itemName_AboutMe,
        },
        stack: { 
            iconName: 'icon-rocket',
            itemName: text.MenuItem_itemName_Stack,
        },
        gallery: { 
            iconName: 'icon-image',
            itemName: text.MenuItem_itemName_Gallery,
        },
        webdev: { 
            iconName: 'icon-laptop',
            itemName: text.MenuItem_itemName_WebDev,
        },
        contact: { 
            iconName: 'icon-paper-plane',
            itemName: text.MenuItem_itemName_Contact,
        },
    }
}

export default menuItemsList;