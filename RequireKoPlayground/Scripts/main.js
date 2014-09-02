require.config({
    baseUrl: '/Scripts/app',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. 
        jquery: '../lib/jquery-2.1.1',
        domReady: '../lib/domReady',
        knockout: '../lib/knockout-3.2.0'
    }
});