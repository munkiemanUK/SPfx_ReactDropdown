"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spfxWindow = window;
spfxWindow.DEBUG = true;
spfxWindow.ENVIRONMENTTYPE = 'Local';
// This is a hack to work around a react-redux issue.
spfxWindow.process = { env: { NODE_ENV: 'production' } };
const manifests = spfxWindow.debugManifests.getManifests();
const manifestIds = new Set();
for (const manifest of manifests) {
    manifestIds.add(manifest.id.toUpperCase());
}
const localManifests = spfxWindow.localWorkbenchManifests;
for (const localManifest of localManifests) {
    const upperCaseManifestId = localManifest.id.toUpperCase();
    // Only add local workbench manifests not already present
    if (!manifestIds.has(upperCaseManifestId)) {
        manifests.push(localManifest);
        manifestIds.add(upperCaseManifestId);
    }
}
const USE_REQUIRE_JS_LOADER = 125;
const enabledFlights = [USE_REQUIRE_JS_LOADER];
// Encode the enabled flights
const expFeatures = [];
for (const enabledFlight of enabledFlights) {
    const index = enabledFlight >> 5; // tslint:disable-line:no-bitwise
    while (expFeatures.length < index + 1) {
        expFeatures.push(0);
    }
    expFeatures[index] = expFeatures[index] | (1 << (enabledFlight & 31)); // tslint:disable-line:no-bitwise
}
spfxWindow.preloadedData = {
    clientSideApplicationId: '8be81a5c-af38-4bb2-af97-afa3b64dfbed',
    buildNumber: 'spfx-local-build',
    manifests,
    spPageContextInfo: {
        aadInstanceUrl: 'https://login.windows.net',
        aadTenantId: '00000000-0000-4000-b000-000000000000',
        aadSessionId: '00000000-0000-4000-b000-111111111111',
        aadUserId: '00000000-0000-4000-b000-222222222222',
        cdnPrefix: 'test.sharepoint',
        CorrelationId: '00000000-0000-4000-b000-333333333333',
        currentCultureName: 'en-US',
        currentUICultureName: 'en-US',
        ExpFeatures: expFeatures,
        featureInfo: [],
        groupId: 0,
        groupType: 'Public',
        isAnonymousGuestUser: false,
        isAppWeb: true,
        isExternalGuestUser: false,
        isNoScriptEnabled: false,
        listBaseTemplate: 119,
        listId: '00000000-0000-4000-b000-444444444444',
        listPermsMask: { High: 0x7fffffff, Low: 0xffffffff },
        listUrl: 'https://wwww.contoso.com/sites/workbench/lists/todo',
        listTitle: 'Todo List',
        pageItemId: -1,
        pagePermsMask: { High: 0x7fffffff, Low: 0xffffffff },
        RecycleBinItemCount: -1,
        serverRequestPath: '/workbench.aspx',
        spfx3rdPartyServicePrincipalId: '00000000-0000-4000-b000-555555555555',
        siteAbsoluteUrl: 'https://wwww.contoso.com/',
        siteId: '00000000-0000-4000-b000-666666666666',
        siteClassification: 'ABC',
        sitePagesEnabled: true,
        sitePagesFeatureVersion: 4,
        socialBarEnabled: true,
        siteServerRelativeUrl: '/',
        userDisplayName: 'User 1',
        userEmail: 'user1@contoso.com',
        userLoginName: 'user1@contoso.com',
        userPrincipalName: 'user1@contoso.com',
        webAbsoluteUrl: 'https://wwww.contoso.com/sites/workbench',
        webId: '00000000-0000-4000-b000-777777777777',
        webLanguage: 1033,
        webLanguageName: 'en-US',
        webLogoUrl: 'https://wwww.contoso.com/sites/workbench/test.jpg',
        webPermMasks: { High: 0x7fffffff, Low: 0xffffffff },
        webServerRelativeUrl: '/sites/workbench',
        webTemplate: 'Blog',
        webTitle: 'Local Workbench'
    },
    contextWebInfo: {
        FormDigestTimeoutSeconds: 1800,
        FormDigestValue: 'Mock Digest'
    }
};
//# sourceMappingURL=workbenchInit.js.map