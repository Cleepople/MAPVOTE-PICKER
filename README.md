# tf-mapvote
A simple [NodeCG](http://nodecg.com/) bundle pick ban system for tf2 maps. This bundle allows the user  to display maps picked or banned, regardless of pick/ban format. There is a backend [NodeCG Bundle created by shdwpuppet](https://github.com/shdwpuppet/map-pick-api) that uses JSON Data from [TF2 Map Picker](http://tf2atgxl.com/map_pick). This backend bundle will show the user what maps have been picked and banned right on the dashboard. 

### Installation

Download and unzip to nodecg/bundles/ Alternatively run:

```
nodecg install erynnb/tf-mapvote
```

### Usage

Enter team names. Maps have been pre-entered but can be changed. Toggle Blue/Red Pick buttons toggle a pulsing animation showing which team is picking. Click Pick or Ban for the Team and Map that is currently being selected. If a mistake is made, click the button again and it will revert to normal.

PLEASE replace any branding, logos and colour schemes with your own if using the bundle. These changes can be made easily by editing the css file. Feel free to use the included map images. To add your own map image, create a 400 x 50 png/jpg and add a class to the css file. When you add the map name to the dashboard, it will look for its own class. For example: cp_sunshine

```
.cp_sunshine, .sunshine {
background-image:  url('img/sunshine.png');
}
```
