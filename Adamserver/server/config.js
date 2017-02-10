/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development 
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

'use strict'; // http://www.w3schools.com/js/js_strict.asp

module.exports = {

    // this this callback URL when creating your client ID and secret
    callbackURL: 'https://murmuring-cove-16220.herokuapp.com/api/forge/callback/oauth',

    // set enviroment variables or hard-code here
    credentials: {
        client_id: 'DZPRPW3dMysLmkiVb0eeulKRaGjH8GpQ',
        client_secret: 'M14nblPOBp90vxOa'
    },

    // Required scopes for your application on server-side
    scopeInternal: 'data:read data:write data:create data:search bucket:create bucket:read bucket:update bucket:delete',
    // Required scope of the token sent to the client
    scopePublic: 'data:read'
};