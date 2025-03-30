import React from "react";
import "./Services.scss";
import { useTranslation } from "react-i18next";
import { Collapse } from "antd";
import { CaretRightFilled } from "@ant-design/icons/lib/icons";
import { BiSolidRightArrow, BiSolidLeftArrowAlt } from "react-icons/bi";

const Services = () => {
  const { t, i18n } = useTranslation();

  const collapseItems = [
    {
      key: "1",
      label: t("services.1"),
      children: <p>{t("services.2")}</p>,
    },
    {
      key: "2",
      label: t("services.3"),
      children: <p>{t("services.4")}</p>,
    },
    {
      key: "3",
      label: t("services.5"),
      children: <p>{t("services.6")}</p>,
    },
    {
      key: "4",
      label: t("services.7"),
      children: <p>{t("services.8")}</p>,
    },
    {
      key: "5",
      label: t("services.9"),
      children: <p>{t("services.10")}</p>,
    },
    {
      key: "6",
      label: t("services.11"),
      children: <p>{t("services.12")}</p>,
    },
    {
      key: "7",
      label: t("services.13"),
      children: <p>{t("services.14")}</p>,
    },
    {
      key: "8",
      label: t("services.15"),
      children: <p>{t("services.16")}</p>,
    },
    {
      key: "9",
      label: t("services.17"),
      children: <p>{t("services.18")}</p>,
    },
    {
      key: "10",
      label: t("services.19"),
      children: <p>{t("services.20")}</p>,
    },
    {
      key: "11",
      label: t("services.21"),
      children: <p>{t("services.22")}</p>,
    },
    {
      key: "12",
      label: t("services.23"),
      children: <p>{t("services.24")}</p>,
    },
    {
      key: "13",
      label: t("services.25"),
      children: <p>{t("services.26")}</p>,
    },
  ];
  return (
    <div className="services-container">
      {" "}
      <Collapse
        className="collapse"
        accordion={true}
        items={collapseItems}
        expandIcon={({ isActive }) => {
          return (
            <CaretRightFilled
              style={{ fontSize: "24px", marginTop: "20px" }}
              rotate={isActive ? 90 : 0}
            />
          );
        }}
      >
        <div key="1"></div>
        <div key="2"></div>
        <div key="3"></div>
        <div key="4"></div>
        <div key="5"></div>
        <div key="6"></div>
        <div key="7"></div>
        <div key="8"></div>
        <div key="9"></div>
        <div key="10"></div>
        <div key="11"></div>
        <div key="12"></div>
        <div key="13"></div>
      </Collapse>
    </div>
  );
};

export default Services;
