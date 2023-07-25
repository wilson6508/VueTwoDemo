(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac42d"],{"197f":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row m-4"},[n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"pom.xml",language:"html"},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[n("pre",[e._v("<dependency>\n    <groupId>com.google.apis</groupId>\n    <artifactId>google-api-services-sheets</artifactId>\n    <version>v4-rev493-1.23.0</version>\n</dependency>\n              ")])]},proxy:!0}])})],1),n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"build.gradle",language:"html"},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[n("pre",[e._v("implementation 'com.google.api-client:google-api-client:1.23.0'\nimplementation 'com.google.oauth-client:google-oauth-client-jetty:1.23.0'\nimplementation 'com.google.apis:google-api-services-sheets:v4-rev516-1.23.0'\n              ")])]},proxy:!0}])})],1),n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"SheetsService"},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[n("pre",[e._v('import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;\nimport com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;\nimport com.google.api.client.http.javanet.NetHttpTransport;\nimport com.google.api.client.json.JsonFactory;\nimport com.google.api.client.json.jackson2.JacksonFactory;\nimport com.google.api.services.sheets.v4.Sheets;\nimport com.google.api.services.sheets.v4.SheetsScopes;\nimport org.springframework.stereotype.Service;\n\nimport java.io.InputStream;\nimport java.util.Collections;\nimport java.util.List;\n\n@Service\npublic class SheetsService {\n\n    private static final String CREDENTIALS_FILE_PATH = "/credentials.json";\n    private static final List<String> SCOPES = Collections.singletonList(SheetsScopes.DRIVE);\n    private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();\n    private static final String APPLICATION_NAME = "SheetApi";\n\n    public Sheets getSheets() {\n        try {\n            InputStream inputStream = SheetsService.class.getResourceAsStream(CREDENTIALS_FILE_PATH);\n            GoogleCredential credential = GoogleCredential.fromStream(inputStream).createScoped(SCOPES);\n            NetHttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();\n            return new Sheets.Builder(httpTransport, JSON_FACTORY, credential).setApplicationName(APPLICATION_NAME).build();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n        return null;\n    }\n\n}\n          ')])]},proxy:!0}])})],1),n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:"GsaService"},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[n("pre",[e._v('import com.google.api.services.sheets.v4.Sheets;\nimport com.google.api.services.sheets.v4.model.ValueRange;\nimport org.springframework.stereotype.Service;\n\nimport javax.annotation.Resource;\nimport java.util.Collections;\nimport java.util.List;\n\n@Service\npublic class GsaService {\n\n    @Resource\n    SheetsService sheetsService;\n\n    public List<List<Object>> readData(String sheetId, String range) {\n        try {\n            Sheets sheets = sheetsService.getSheets();\n            ValueRange response = sheets.spreadsheets().values().get(sheetId, range).execute();\n            return response.getValues();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n        return null;\n    }\n\n    public void insertData(String sheetId, String range, List<Object> newData) {\n        try {\n            Sheets sheets = sheetsService.getSheets();\n            ValueRange appendBody = new ValueRange().setValues(Collections.singletonList(newData));\n            sheets.spreadsheets()\n                    .values()\n                    .append(sheetId, range, appendBody)\n                    .setValueInputOption("USER_ENTERED")\n                    .setInsertDataOption("INSERT_ROWS")\n                    .setIncludeValuesInResponse(true)\n                    .execute();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    public void updateData(String sheetId, String range, List<Object> newData) {\n        try {\n            Sheets sheets = sheetsService.getSheets();\n            ValueRange updateBody = new ValueRange().setValues(Collections.singletonList(newData));\n            sheets.spreadsheets()\n                    .values()\n                    .update(sheetId, range, updateBody)\n                    .setValueInputOption("RAW")\n                    .execute();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    // String sheetId = "1L6Wduy1cv3ze_ASGAHWHDi14uUc85g_lMASKMtmt1Js";\n    // String range = "Sheet01!A1:C1";\n    // List<Object> newData = Arrays.asList(3, "Kevin", 100);\n\n}\n          ')])]},proxy:!0}])})],1)])])},s=[],a=n("32f4"),i={name:"GoogleSheet",components:{CodeContainer:a["a"]}},r=i,c=n("2877"),l=Object(c["a"])(r,o,s,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0ac42d.7623850c.js.map