import AddLoanSchemePage from "../pages/AddLoanSchemPage";
import { userRoles as ur } from "../pages/userRole";
import StaffPage from "../pages/StaffPage";

export const admin_routes = [
    { 
        path: "/staff-details", 
        ele: <StaffPage />,
        availability: [ur.admin]
    },
    { 
        path: "/add-loan-scheme", 
        ele: <AddLoanSchemePage />,
        availability: [ur.admin]
    }
];
