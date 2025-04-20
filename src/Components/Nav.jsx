import * as React from "react";
import { createTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import HomeIcon from '@mui/icons-material/Home';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

const Logo = styled("img")(({ theme }) => ({
  width: "auto",
  height: "60px", // Adjust height based on your needs
  objectFit: "contain",
  display: "block",
  margin: "auto",

  [theme.breakpoints.down("md")]: {
    height: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "40px",
  },
  [theme.breakpoints.down("xs")]: {
    height: "30px",
  },
}));

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Home",
    icon: <HomeRoundedIcon />,
  },
  {
    segment: "about",
    title: "About Us",
    icon: <InfoRoundedIcon />,
  },
  {
    segment: "donate",
    title: "Donate",
    icon: <VolunteerActivismRoundedIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "contact",
    title: "Contact Us",
    icon: <ContactsRoundedIcon />,
  },
];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout
        branding={{
          logo: (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 2,
              }}
            >
              <Logo
                src="https://res.cloudinary.com/krishnamohan479/image/upload/v1661537569/ms4-modified_ku28n9.png"
                alt="My Logo"
              />
            </Box>
          ),
          title: (
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                paddingTop: 2,
              }}
            >
              <span
                style={{
                  fontFamily: '"Anek Telugu", sans-serif',
                  fontWeight: 600,
                  fontSize: 30,
                  color: "#1976d2",
                }}
              >
                మేముసైతం
              </span>
            </Box>
          ),
        }}
      >
        <PageContainer>
  {router.pathname === "/dashboard" && (
    <Box sx={{ p: 3, backgroundColor: "#ede7f6", borderRadius: 2 }}>
      <h2>Hero Section</h2>
      <p>Welcome to the Hero section! Customize this however you like.</p>
    </Box>
  )}
{router.pathname === "/about" && (
    <Box sx={{ p: 3, backgroundColor: "#e3f2fd", borderRadius: 2 }}>
      <h2>About Section</h2>
      <p>This is a custom div for the About page.</p>
    </Box>
  )}
  {router.pathname === "/donate" && (
    <Box sx={{ p: 3, backgroundColor: "#e3f2fd", borderRadius: 2 }}>
      <h2>Donations Section</h2>
      <p>This is a custom div for the Donations page.</p>
    </Box>
  )}

  {router.pathname === "/integrations" && (
    <Box sx={{ p: 3, backgroundColor: "#f3e5f5", borderRadius: 2 }}>
      <h2>Integrations Section</h2>
      <p>This is a custom div for the Integrations page.</p>
    </Box>
  )}

  {router.pathname === "/reports/sales" && (
    <Box sx={{ p: 3, backgroundColor: "#e8f5e9", borderRadius: 2 }}>
      <h2>Sales Report</h2>
      <p>This is a custom div for the Sales Report page.</p>
    </Box>
  )}

  {router.pathname === "/reports/traffic" && (
    <Box sx={{ p: 3, backgroundColor: "#fff3e0", borderRadius: 2 }}>
      <h2>Traffic Report</h2>
      <p>This is a custom div for the Traffic Report page.</p>
    </Box>
  )}

  {/* Default fallback for unmatched routes */}
  {![
    "/dashboard",
    "/about",
    "/donate",
    "/integrations",
    "/reports/sales",
    "/reports/traffic",
  ].includes(router.pathname) && (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Skeleton height={14} />
      </Grid>
      <Grid item xs={12}>
        <Skeleton height={100} />
      </Grid>
    </Grid>
  )}
</PageContainer>

      </DashboardLayout>
    </AppProvider>
  );
}
