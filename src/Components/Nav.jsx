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
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';

const Logo = styled("img", {
  shouldForwardProp: (prop) => prop !== "theme" && prop !== "ownerstate",
})(({ theme }) => ({
  width: "auto",
  height: "60px",
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

const Skeleton = styled("div", {
  shouldForwardProp: (prop) => prop !== "height" && prop !== "ownerstate",
})(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
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
    segment: "projects",
    title: "Projects",
    icon: <WorkHistoryRoundedIcon />,
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
    title: "Media & Support",
  },
  {
    segment: "memberinfo",
    title: "Members Information",
    icon: <Diversity3RoundedIcon />,
    children: [
      {
        segment: "volunteers",
        title: "Our People",
        icon: <DescriptionIcon />,
      },
      {
        segment: "donors",
        title: "Donor List",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "photogallery",
    title: "Photo Gallery",
    icon: <CollectionsRoundedIcon />,
  },
  {
    segment: "campaigns",
    title: "Campaigns",
    icon: <CampaignRoundedIcon />,
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

export default function DashboardLayoutBasic(props) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
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
        <PageContainer ownerstate={"dashboardLayout"}>
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

{router.pathname === "/projects" && (
            <Box sx={{ p: 3, backgroundColor: "#e3f2fd", borderRadius: 2 }}>
              <h2>Projects Section</h2>
              <p>This is a custom div for the Projects page.</p>
            </Box>
          )}


          {router.pathname === "/donate" && (
            <Box sx={{ p: 3, backgroundColor: "#fce4ec", borderRadius: 2 }}>
              <h2>Donations Section</h2>
              <p>This is a custom div for the Donations page.</p>
            </Box>
          )}

          {router.pathname === "/photogallery" && (
            <Box sx={{ p: 3, backgroundColor: "#e8f5e9", borderRadius: 2 }}>
              <h2>Photo gallery Section</h2>
              <p>This is a Photo gallery page.</p>
            </Box>
          )}

          {router.pathname === "/campaigns" && (
            <Box sx={{ p: 3, backgroundColor: "#f3e5f5", borderRadius: 2 }}>
              <h2>campaigns Section</h2>
              <p>This is a custom div for the campaigns page.</p>
            </Box>
          )}

          {router.pathname === "/memberinfo/volunteers" && (
            <Box sx={{ p: 3, backgroundColor: "#fffde7", borderRadius: 2 }}>
              <h2>Volunteers info</h2>
              <p>This is a custom div for the Volunteers info page.</p>
            </Box>
          )}

          {router.pathname === "/memberinfo/donors" && (
            <Box sx={{ p: 3, backgroundColor: "#e1f5fe", borderRadius: 2 }}>
              <h2>Donor List info</h2>
              <p>This is a custom div for the Donor List info page.</p>
            </Box>
          )}

          {/* Fallback skeleton for unmatched paths */}
          {![
            "/dashboard",
            "/about",
            "/projects",
            "/donate",
            "/photogallery",
            "/campaigns",
            "/memberinfo/volunteers",
            "/memberinfo/donors",
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
