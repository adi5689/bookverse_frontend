"use client";
// import { CustomFlowbiteTheme } from 'flowbite-react';
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmLeft,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import React from "react";
import { FaBookBookmark } from "react-icons/fa6";

const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with logo branding example" className="p-0">
      <Sidebar.Logo href="#" className="bg-[#000000] p-3">
        <div
          to="/"
          className="text-2xl font-bold text-[#fffc4c] items-center gap-2"
        >
          <FaBookBookmark className="inline-block" /> BooK
          <span className="text-white">VersE</span>
        </div>
      </Sidebar.Logo>
      <Sidebar.Items className="">
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={HiArrowSmLeft}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/sign-out" icon={HiTable}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
