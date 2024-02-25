import { Box, Grid, Typography } from "@mui/joy"
import { footerData } from './footer.data'
import FooterLinkGroup from "./footer-link-group/FooterLinkGroup.component"
import { styleVariables } from "../../styles/styleVariables"
import FooterSocialGroup from "./footer-social-group/FooterSocialGroup.component"



const Footer = () => {
    const { xs, md, lg } = styleVariables.layoutPadding

    return (
        <Box
            pt={10}
            bgcolor='neutral.800'
            sx={{ px: { xs: '15%', md, lg } }}
        >
            <Grid container columns={12} spacing={3}>
                <FooterLinkGroup groupTitle="POLICIES" group={footerData.policies} />
                <FooterLinkGroup groupTitle="RESOURCES" group={footerData.resources} />
                <FooterLinkGroup groupTitle="INFORMATION" group={footerData.shortcuts} />
                <FooterLinkGroup groupTitle="SUPPORT" group={footerData.support} />
            </Grid>

            <FooterSocialGroup />

            <Typography level='body-xs' pt={6} pb={2} textColor='primary.400'>
                All rights reserved. Easy Letters AI  {new Date().getFullYear()}
            </Typography>
        </Box>
    )
}

export default Footer