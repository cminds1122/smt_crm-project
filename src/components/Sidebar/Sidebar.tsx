import "./Sidebar.scss";
import SidebarData from '../../constants/SidebarData';
import iconMapping, { IconName } from '../Sidebar/IconMapping';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const mappedSidebarData = SidebarData.map((item) => ({
  ...item,
  icons: iconMapping[item.icons as IconName], 
}));

const Sidebar: React.FC<any> = () => {

const [sidebarData , setSidebarData] = useState(mappedSidebarData)
const navigate = useNavigate();

  const habdleClick=(event:any)=>{
    sidebarData.map(item => item.isActive = false)
    const updatedItems = sidebarData.map(item => 
      item.name === event.name ? { ...item, isActive: true } : item
    );

    setSidebarData(updatedItems)
    console.log('sakjgjksdhg')
    navigate('/add-student')
  }

  const handleChildClick = (selectedItem:any, selectedChild:any) => {
   
    const updatedChild = selectedItem.children.map((item:any) => 
      selectedItem.id === selectedChild.id ? { ...item, isActive: true } : item
    );
    console.log('handleChildClick(item)', updatedChild)
    // const updatedItems = sidebarData.map(item => 
    //   item.id === selectedItem.id ? { ...updatedChild } : item
    // );
    // setSidebarData(updatedItems)
  }

  return (
    <div className="sidebar__container">
      <div className='sidebar__wraper '>
      <ul className="list-group border-0 rounded-3">
        {sidebarData.map((item:any, index) => {
          const IconComponent = item.icons;

          return (
            <li key={index} className=" content list-group-item">
              {item && item.children && item.children.length > 0 ? (
                <div className="accordion" id={`accordionFlushExample${index}`}>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id={`flush-heading${index}`}>
                      <button
                        className="accordion-button collapsed border-0 rounded-3 sidebar__wraper--active"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${index}`}

                        // aria-expanded="false"
                        aria-controls={`flush-collapse${index}`}
                      >

                        {IconComponent && <IconComponent className="react-icon"/>} {item.name} 
                        
                      </button>
                    </h2>
                    <div
                      id={`flush-collapse${index}`}
   
                      className="accordion-collapse collapse"
                      aria-labelledby={`flush-heading${index}`}
                      data-bs-parent={`#accordionFlushExample${index}`}
                    >
                      <div className="accordion-body ">
                        <ul>
                          {item && item?.children && item.children.map((child:any, childIndex:number) => (
                            <li key={childIndex} className="list-group-item ps-1 border-0 rounded-3 sub-list" onClick={() => handleChildClick(item, child)}>{child.name}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                className={`sidebar accordion-button collapsed list--items ${item.isActive ? 'active' : ''}`}
                type="button"
                onClick={() => habdleClick(item)}
              >
                {IconComponent && <IconComponent className="react-icon" />} {item.name}
              </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;



