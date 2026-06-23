export type DashboardData = {
  data: {
    counts: {
      total_products: number;
      total_categories: number;
      total_segments: number;
      total_divisions: number;
    };
    recent_modified_products: {
      id: number;
      thumbnail: string;
      title: string;
      category: string;
      updated_at: string;
    }[];
  };
};