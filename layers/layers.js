var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_UAT1oraelecomuneisate_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://moldova-map.md/geoserver/cadastru_data/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "UAT1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "UAT-1 (oraşele, comune şi sate)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_UAT1oraelecomuneisate_1, 0]);
var format_CurbedenivelCremenciug_2 = new ol.format.GeoJSON();
var features_CurbedenivelCremenciug_2 = format_CurbedenivelCremenciug_2.readFeatures(json_CurbedenivelCremenciug_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurbedenivelCremenciug_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurbedenivelCremenciug_2.addFeatures(features_CurbedenivelCremenciug_2);
var lyr_CurbedenivelCremenciug_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurbedenivelCremenciug_2, 
                style: style_CurbedenivelCremenciug_2,
                popuplayertitle: "Curbe de nivel Cremenciug",
                interactive: true,
                title: '<img src="styles/legend/CurbedenivelCremenciug_2.png" /> Curbe de nivel Cremenciug'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_UAT1oraelecomuneisate_1.setVisible(true);lyr_CurbedenivelCremenciug_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_UAT1oraelecomuneisate_1,lyr_CurbedenivelCremenciug_2];
lyr_CurbedenivelCremenciug_2.set('fieldAliases', {'gid': 'gid', 'shape_leng': 'shape_leng', 'layer': 'layer', 'medium': 'medium', 'z': 'z', 'layer_name': 'layer_name', });
lyr_CurbedenivelCremenciug_2.set('fieldImages', {'gid': 'TextEdit', 'shape_leng': 'TextEdit', 'layer': 'TextEdit', 'medium': 'TextEdit', 'z': 'TextEdit', 'layer_name': 'TextEdit', });
lyr_CurbedenivelCremenciug_2.set('fieldLabels', {'gid': 'no label', 'shape_leng': 'no label', 'layer': 'no label', 'medium': 'no label', 'z': 'inline label - always visible', 'layer_name': 'no label', });
lyr_CurbedenivelCremenciug_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});