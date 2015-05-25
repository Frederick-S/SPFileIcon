# SPFileIcon
Get icon name by file extension in SharePoint 2013.

# Usage
```js
var fileExtension = 'aspx';
var icon = SPFileIcon.get(fileExtension);

console.log(icon); // ichtm.gif
```

If the file extension is not supported, then it returns the default icon `icgen.gif`.

# License
MIT.
