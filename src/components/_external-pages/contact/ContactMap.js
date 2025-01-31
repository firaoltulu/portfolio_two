import MapGL from 'react-map-gl';
import { useState } from 'react';
import Map from 'react-map-gl';

// import { Icon } from '@iconify/react';
// import phoneFill from '@iconify/icons-eva/phone-fill';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

//
import { MapControlPopup, MapControlMarker, MapControlScale, MapControlNavigation } from '../../map';
import { mapConfig } from '../../../config';
import { varFadeIn, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

export const MOCK_ADDRESS = [
  {
    latlng: [33, 65],
    address: '508 Nifas silk Addis Ababa, GA 30263',
    phoneNumber: '255-911-782-233'
  },
  {
    latlng: [-12.5, 18.5],
    address: '600 nazrait oromia, GA 30263',
    phoneNumber: '255-911-782-233'
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right': {
    display: 'none'
  }
}));

// ----------------------------------------------------------------------

export default function ContactMap() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const [tooltip, setTooltip] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 12,
    longitude: 42,
    zoom: 2
  });

  return (
    <MotionInView variants={varFadeIn}>
      <RootStyle>
        {/* <MapGL
          {...viewport}
          onViewportChange={setViewport}
          mapStyle={`mapbox://styles/mapbox/${isLight ? 'light' : 'dark'}-v10`}
          mapboxApiAccessToken={mapConfig}
          width="100%"
          height="100%"
        >
          <MapControlScale />
          <MapControlNavigation />

          {MOCK_ADDRESS.map((country) => (
            <MapControlMarker
              key={country.latlng}
              latitude={country.latlng[0]}
              longitude={country.latlng[1]}
              onClick={() => setTooltip(country)}
            />
          ))}

          {tooltip && (
            <MapControlPopup
              longitude={tooltip.latlng[1]}
              latitude={tooltip.latlng[0]}
              onClose={() => setTooltip(null)}
              sx={{
                '& .mapboxgl-popup-content': { bgcolor: 'common.white' },
                '&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip': { borderTopColor: '#FFF' },
                '&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip': { borderBottomColor: '#FFF' }
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                Address
              </Typography>
              <Typography component="p" variant="caption">
                {tooltip.address}
              </Typography>

              <Typography component="p" variant="caption" sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                <Box component={Icon} icon={phoneFill} sx={{ mr: 0.5, width: 14, height: 14 }} />
                {tooltip.phoneNumber}
              </Typography>
            </MapControlPopup>
          )}
        </MapGL> */}
        <Map
          mapboxAccessToken="<Mapbox access token>"
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14
          }}
          style={{ width: 600, height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </RootStyle>
    </MotionInView>
  );
}
