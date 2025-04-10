// src/lib/services.ts
import { fetchGraphQL } from "./graphql"; // Use relative path

// Define the structure of a single Service (can be shared)
export interface Service {
  id: string;
  slug: string; // Add slug for linking later
  title: string;
  serviceDetails: {
    shortDescription: string | null;
    iconClass: string | null;
  };
}

// Define the structure of the data returned by our query (can be shared)
interface ServicesData {
  services: {
    nodes: Service[];
  }
}

// The GraphQL query (add slug)
const GET_SERVICES_QUERY = `
  query GetServices {
    services(where: { orderby: { field: DATE, order: ASC } }) {
      nodes {
        id
        slug # Fetch the slug
        title(format: RENDERED)
        serviceDetails {
          shortDescription
          iconClass
        }
      }
    }
  }
`;

// Exportable function to fetch the services data
export async function getServices(): Promise<Service[]> {
  try {
    const data = await fetchGraphQL(GET_SERVICES_QUERY) as ServicesData;
    return data?.services?.nodes ?? [];
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return [];
  }
}