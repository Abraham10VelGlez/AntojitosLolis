var lyr_CartografaBase2016 = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://acvisor.edomex.gob.mx:8080/geoserver/wms?",
                          params: {"LAYERS": "Atlas:igecemCartografiaBaseCg2016", "TILED": "true"},
                        })),
                        title: "Cartografía Base 2016",
                        
                        
                      });var format_tablatemp = new ol.format.GeoJSON();
var features_tablatemp = format_tablatemp.readFeatures(geojson_tablatemp, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tablatemp = new ol.source.Vector();
jsonSource_tablatemp.addFeatures(features_tablatemp);var lyr_tablatemp = new ol.layer.Vector({
                source:jsonSource_tablatemp, 
                style: style_tablatemp,
                title: "tablatemp"
            });

lyr_CartografaBase2016.setVisible(true);lyr_tablatemp.setVisible(true);
var layersList = [lyr_CartografaBase2016,lyr_tablatemp];
lyr_tablatemp.set('fieldAliases', {'lon': 'lon', 'lat': 'lat', 'MUNICIPIO': 'MUNICIPIO', 'DELEGACION': 'DELEGACION', 'CLAVEINEGI': 'CLAVEINEGI', 'CLAVEIGECEM': 'CLAVEIGECEM', });
lyr_tablatemp.set('fieldImages', {'lon': 'TextEdit', 'lat': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DELEGACION': 'TextEdit', 'CLAVEINEGI': 'TextEdit', 'CLAVEIGECEM': 'TextEdit', });
lyr_tablatemp.set('fieldLabels', {'lon': 'header label', 'lat': 'header label', 'MUNICIPIO': 'header label', 'DELEGACION': 'header label', 'CLAVEINEGI': 'header label', 'CLAVEIGECEM': 'header label', });
lyr_tablatemp.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});