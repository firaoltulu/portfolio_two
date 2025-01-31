import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
// material
import { styled, useTheme } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// components
import {
    ContactForm,
    ContactMap
} from '../contact';
// import { MapMarkersPopups } from 'src/components/map';
// import { mapConfig } from 'src/config';
// Hooks
import useNav from '../../../hooks/useNav';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(1)
    }
}));

// ----------------------------------------------------------------------

export default function LandingContact() {
    const theme = useTheme();

    const { navOption, isLock, onScrollChange } = useNav();

    const [ref, inView] = useInView();


    useEffect(() => {
        if (inView && (isLock === false)) {
            onScrollChange(navOption[4]);
        } else {
        }
    }, [inView])

    return (
        <RootStyle id='contact_section' ref={ref}>

            <Container sx={{ my: 10 }}>

                <Grid container spacing={10}>

                    <Grid item xs={12} md={6}>
                        <ContactForm />
                    </Grid>

                    {/* <Grid item xs={12} md={6}>
                        <Card sx={{ mb: 3 }}>
                            <CardHeader title="Map Markers & Popups" />
                            <CardContent>
                                <MapWrapperStyle>
                                    <ContactMap />
                                </MapWrapperStyle>
                            </CardContent>
                        </Card>
                    </Grid> */}

                </Grid>

            </Container>

        </RootStyle>
    );
}
