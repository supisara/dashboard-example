import { useState } from "react";
import {
  DashboardIcon,
  ChartIcon,
  CalendarIcon,
  MailIcon,
  ChatIcon,
  TaskIcon,
  ProjectIcon,
  FolderIcon,
  TextIcon,
  ContactsIcon,
} from "../assets/Icon/Main.js";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const MenuItems = ({ link, title, icon, activeItem, handleOnClick }) => {
  return (
    <li name={link} onClick={() => handleOnClick()}>
      <Link to={link}>
        {activeItem === link ? (
          <div className="flex justify-between items-center pl-7 pr-8 py-4 bg-blue-light border-l-4 border-blue-middle">
            <div className="flex items-center space-x-4">
              {icon} <p className="font-medium text-blue-middle">{title}</p>
            </div>
            <div>
              <ChevronRightIcon className="h-5 w-5 text-blue-middle" />
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center px-8 py-4">
            <div className="flex items-center space-x-4">
              {icon} <p className="font-normal text-gray-dark">{title}</p>
            </div>
          </div>
        )}
      </Link>
    </li>
  );
};

const Sidebar = () => {
  const pathName = window.location.pathname.split("/").toString();
  const [activeItem, setActiveItem] = useState(
    pathName ? pathName : "dashboard"
  );

  return (
    <div className="sidebar-main w-80 flex flex-col h-screen duration-300">
      <div className="flex-1">
        <ul>
          <MenuItems
            title="Dashboard"
            link="dashboard"
            icon={
              activeItem === "dashboard" ? (
                <DashboardIcon size="20" color="#0A6EE1" />
              ) : (
                <DashboardIcon size="20" color="#8A9099" />
              )
            }
            activeItem={activeItem}
            handleOnClick={() => setActiveItem("dashboard")}
          />

          <MenuItems
            title="E-Commerce"
            link="e-commerce"
            icon={
              activeItem === "e-commerce" ? (
                <ChartIcon size="20" color="#0A6EE1" />
              ) : (
                <ChartIcon size="20" color="#8A9099" />
              )
            }
            activeItem={activeItem}
            handleOnClick={() => setActiveItem("e-commerce")}
          />

          <MenuItems
            title="Calendar"
            link="calendar"
            icon={
              activeItem === "calendar" ? (
                <CalendarIcon size="20" color="#0A6EE1" />
              ) : (
                <CalendarIcon size="20" color="#8A9099" />
              )
            }
            activeItem={activeItem}
            handleOnClick={() => setActiveItem("calendar")}
          />

          <MenuItems
            title="Mail"
            link="mail"
            icon={
              activeItem === "mail" ? (
                <MailIcon size="20" color="#0A6EE1" />
              ) : (
                <MailIcon size="20" color="#8A9099" />
              )
            }
            activeItem={activeItem}
            handleOnClick={() => setActiveItem("mail")}
          />

          <MenuItems
            title="Chat"
            link="chat"
            icon={
              activeItem === "chat" ? (
                <ChatIcon size="20" color="#0A6EE1" />
              ) : (
                <ChatIcon size="20" color="#8A9099" />
              )
            }
            activeItem={activeItem}
            handleOnClick={() => setActiveItem("chat")}
          />
          <MenuItems
            title="Tasks"
            link="tasks"
            icon={
              activeItem === "tasks" ? (
                <TaskIcon size="20" color="#0A6EE1" />
              ) : (
                <TaskIcon size="20" color="#8A9099" />
              )
            }
            activeItem={activeItem}
            handleOnClick={() => setActiveItem("tasks")}
          />

          <MenuItems
            title="Projects"
            link="project"
            icon={
              activeItem === "project" ? (
                <ProjectIcon size="20" color="#0A6EE1" />
              ) : (
                <ProjectIcon size="20" color="#8A9099" />
              )
            }
            activeItem={activeItem}
            handleOnClick={() => setActiveItem("project")}
          />

          <MenuItems
            title="File Manager"
            link="file-manager"
            icon={
              activeItem === "file-manager" ? (
                <FolderIcon size="20" color="#0A6EE1" />
              ) : (
                <FolderIcon size="20" color="#8A9099" />
              )
            }
            activeItem={activeItem}
            handleOnClick={() => setActiveItem("file-manager")}
          />
          <MenuItems
            title="Notes"
            link="notes"
            icon={
              activeItem === "notes" ? (
                <TextIcon size="20" color="#0A6EE1" />
              ) : (
                <TextIcon size="20" color="#8A9099" />
              )
            }
            activeItem={activeItem}
            handleOnClick={() => setActiveItem("notes")}
          />

          <MenuItems
            title="Contacts"
            link="contacts"
            icon={
              activeItem === "contacts" ? (
                <ContactsIcon size="20" color="#0A6EE1" />
              ) : (
                <ContactsIcon size="20" color="#8A9099" />
              )
            }
            activeItem={activeItem}
            handleOnClick={() => setActiveItem("contacts")}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
