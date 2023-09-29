import { CollectionConfig } from "payload/types";

const Leads: CollectionConfig = {
  slug: "leads",
  labels: {
    plural: "Leads",
    singular: "Lead",
  },
  admin: {
    useAsTitle: "name",
    disableDuplicate: true,
    hideAPIURL: true,
    group: "Coleções",
  },
  access: {
    create: () => true,
    update: () => true,
    read: () => true,
  },
  fields: [
    {
      label: "Nome",
      name: "name",
      type: "text",
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      label: "Pagina de Cadastro",
      name: "referral",
      type: "text",
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      label: "Termo Aceito?",
      name: "terms",
      type: "checkbox",
      required: true,
      defaultValue: true,
      admin: {
        readOnly: true,
      },
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      required: true,
      admin: {
        readOnly: true,
      },
    },
  ],
};

export default Leads;
