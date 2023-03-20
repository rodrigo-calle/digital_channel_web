import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './MenuItem.scss';

type Props = {
    title: string;
    expand: boolean;
    active: boolean;
    subItems:  Array<{[title: string]: string}>
}


const MenuItem = (props: Props) => {
    const [itemActive, setItemActive] = React.useState<boolean>(false);
    return(
        <React.Fragment>
            <div className="menu-item-container">
                <p className='menu-item-container__title' onClick={() => setItemActive(!itemActive)}>
                    {props.title}
                </p>  
                <div className='menu-item-container__expand'>
                    {props.expand&&(<ExpandMoreIcon fontSize='medium' onClick={() => setItemActive(!itemActive)}/>)}      
                </div>
                <div className="menu-subitems-container">
                {
                    itemActive&&props.subItems.map((subItem, index: number) => 
                        <div key={index}  className='menu-item-subItem'>
                            {subItem.title} 
                        </div>
                    )
                }
                </div> 
            </div>
          
        </React.Fragment>
    );
};

export default MenuItem;