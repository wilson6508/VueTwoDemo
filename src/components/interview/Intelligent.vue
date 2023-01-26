<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''" :language="'html'">
          <template v-slot:sourceCode>
              <pre>
產業: 接案公司
職稱: 後端工程師
時間: 2022-08-16 (二)
結果: 無聲卡
              </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="''" :language="'html'">
          <template v-slot:sourceCode>
              <pre>
有沒有用過MyBatis?
依賴套件版本衝突如何解決?
              </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'SheetsService'">
          <template v-slot:sourceCode>
              <pre>
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.SheetsScopes;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.Collections;
import java.util.List;

@Service
public class SheetsService {

    private static final String CREDENTIALS_FILE_PATH = "/credentials.json";
    private static final List&lt;String&gt; SCOPES = Collections.singletonList(SheetsScopes.DRIVE);
    private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
    private static final String APPLICATION_NAME = "SheetApi";

    public Sheets getSheets() {
        try {
            InputStream inputStream = SheetsService.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
            GoogleCredential credential = GoogleCredential.fromStream(inputStream).createScoped(SCOPES);
            NetHttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();
            return new Sheets.Builder(httpTransport, JSON_FACTORY, credential).setApplicationName(APPLICATION_NAME).build();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
          </pre
          >
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="'GsaService'">
          <template v-slot:sourceCode>
              <pre>
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.model.ValueRange;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Collections;
import java.util.List;

@Service
public class GsaService {

    @Resource
    SheetsService sheetsService;

    public List&lt;List&lt;Object&gt;&gt; readData(String sheetId, String range) {
        try {
            Sheets sheets = sheetsService.getSheets();
            ValueRange response = sheets.spreadsheets().values().get(sheetId, range).execute();
            return response.getValues();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public void insertData(String sheetId, String range, List&lt;Object&gt; newData) {
        try {
            Sheets sheets = sheetsService.getSheets();
            ValueRange appendBody = new ValueRange().setValues(Collections.singletonList(newData));
            sheets.spreadsheets()
                    .values()
                    .append(sheetId, range, appendBody)
                    .setValueInputOption("USER_ENTERED")
                    .setInsertDataOption("INSERT_ROWS")
                    .setIncludeValuesInResponse(true)
                    .execute();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void updateData(String sheetId, String range, List&lt;Object&gt; newData) {
        try {
            Sheets sheets = sheetsService.getSheets();
            ValueRange updateBody = new ValueRange().setValues(Collections.singletonList(newData));
            sheets.spreadsheets()
                    .values()
                    .update(sheetId, range, updateBody)
                    .setValueInputOption("RAW")
                    .execute();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // String sheetId = "1L6Wduy1cv3ze_ASGAHWHDi14uUc85g_lMASKMtmt1Js";
    // String range = "Sheet01!A1:C1";
    // List&lt;Object&gt; newData = Arrays.asList(3, "Kevin", 100);

}
          </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
  </div>
</template>

<script>
import CodeContainer from "@/components/shared/CodeContainer.vue";

export default {
  name: "Intelligent",
  components: {
    CodeContainer,
  },
};
</script>
