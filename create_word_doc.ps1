# Create Word Document with Playwright CLI Commands
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Add()
$selection = $word.Selection

# Helper: Add Heading
function Add-Heading($text, $level) {
    $selection.Style = "Heading $level"
    $selection.TypeText($text)
    $selection.TypeParagraph()
}

# Helper: Add Normal text
function Add-Normal($text) {
    $selection.Style = "Normal"
    $selection.TypeText($text)
    $selection.TypeParagraph()
}

# Helper: Add Code block (using No Spacing style + Courier New font)
function Add-Code($text) {
    $selection.Style = "No Spacing"
    $selection.Font.Name = "Courier New"
    $selection.Font.Size = 9
    $selection.Font.Color = [Microsoft.Office.Interop.Word.WdColor]::wdColorDarkBlue
    $selection.TypeText($text)
    $selection.TypeParagraph()
    $selection.Font.Name = "Calibri"
    $selection.Font.Size = 11
    $selection.Font.Color = [Microsoft.Office.Interop.Word.WdColor]::wdColorAutomatic
}

# ─── TITLE ───────────────────────────────────────────────
$selection.Style = "Title"
$selection.TypeText("Playwright CLI — Complete Command Reference")
$selection.TypeParagraph()

Add-Normal "Version: 1.58.2  |  Generated: $(Get-Date -Format 'dd-MM-yyyy')"
$selection.TypeParagraph()

# ─── 1. open ─────────────────────────────────────────────
Add-Heading "1. open — Open a page in browser" 1
Add-Code "npx playwright open [options] [url]"
Add-Normal "Options:"
Add-Code "  -b, --browser <browser>        chromium | firefox | webkit (default: chromium)"
Add-Code "  --channel <channel>            Browser channel e.g. chrome, msedge"
Add-Code "  --color-scheme <scheme>        light | dark | no-preference"
Add-Code "  --device <deviceName>          Emulate device e.g. 'iPhone 13'"
Add-Code "  --geolocation <coordinates>    'lat,lon'"
Add-Code "  --ignore-https-errors          Ignore HTTPS errors"
Add-Code "  --lang <language>              Language e.g. en-US"
Add-Code "  --load-storage <filename>      Load storage state from file"
Add-Code "  --proxy-server <proxy>         Proxy server e.g. http://myproxy:3128"
Add-Code "  --save-storage <filename>      Save storage state after session"
Add-Code "  --save-trace <filename>        Save trace file"
Add-Code "  --timezone <timezone>          Time zone e.g. 'America/New_York'"
Add-Code "  --timeout <timeout>            Timeout in ms"
Add-Code "  --user-agent <ua string>       Custom user agent"
Add-Code "  --viewport-size <size>         e.g. '1280, 720'"
$selection.TypeParagraph()

# ─── 2. codegen ──────────────────────────────────────────
Add-Heading "2. codegen — Record actions & generate code" 1
Add-Code "npx playwright codegen [options] [url]"
Add-Normal "Options:"
Add-Code "  -o, --output <file>            Save script to file e.g. tests/recorded.spec.js"
Add-Code "  --target <language>            javascript | typescript | python | python-async | java | csharp"
Add-Code "  -b, --browser <browser>        chromium | firefox | webkit"
Add-Code "  --channel <channel>            Browser channel e.g. chrome, msedge"
Add-Code "  --color-scheme <scheme>        light | dark | no-preference"
Add-Code "  --device <deviceName>          Emulate device e.g. 'Pixel 5'"
Add-Code "  --geolocation <coordinates>    'lat,lon'"
Add-Code "  --ignore-https-errors          Ignore HTTPS errors"
Add-Code "  --lang <language>              Language e.g. en-US"
Add-Code "  --load-storage <filename>      Load auth/cookies from file"
Add-Code "  --save-storage <filename>      Save auth/cookies to file"
Add-Code "  --save-trace <filename>        Save trace file"
Add-Code "  --timezone <timezone>          Time zone"
Add-Code "  --viewport-size <size>         '1280, 720'"
Add-Code "  --user-agent <ua>              Custom user agent"
Add-Code "  --proxy-server <proxy>         Proxy server"
$selection.TypeParagraph()

# ─── 3. install ──────────────────────────────────────────
Add-Heading "3. install — Install browsers" 1
Add-Code "npx playwright install [options] [browser...]"
Add-Normal "Browsers: chromium | firefox | webkit | chromium-headless-shell"
Add-Normal "Options:"
Add-Code "  --with-deps     Install OS dependencies for browsers"
Add-Code "  --dry-run       Just list what would be installed"
Add-Code "  --force         Force reinstall even if already installed"
$selection.TypeParagraph()

# ─── 4. cr / ff / wk ─────────────────────────────────────
Add-Heading "4. cr / ff / wk — Open in specific browser" 1
Add-Code "npx playwright cr [options] [url]    # Chromium"
Add-Code "npx playwright ff [options] [url]    # Firefox"
Add-Code "npx playwright wk [options] [url]    # WebKit"
Add-Normal "(Same options as the 'open' command)"
$selection.TypeParagraph()

# ─── 5. screenshot ───────────────────────────────────────
Add-Heading "5. screenshot — Capture page screenshot" 1
Add-Code "npx playwright screenshot [options] <url> <filename>"
Add-Normal "Options:"
Add-Code "  -b, --browser <browser>        chromium | firefox | webkit"
Add-Code "  --device <deviceName>          Emulate device"
Add-Code "  --color-scheme <scheme>        light | dark"
Add-Code "  --full-page                    Capture full scrollable page"
Add-Code "  --wait-for-selector <selector> Wait for element before screenshot"
Add-Code "  --viewport-size <size>         '1280, 720'"
Add-Code "  --geolocation <coordinates>    'lat,lon'"
Add-Code "  --lang <language>              Language"
Add-Code "  --proxy-server <proxy>         Proxy"
Add-Code "  --ignore-https-errors          Ignore HTTPS errors"
Add-Code "  --save-trace <filename>        Save trace"
Add-Code "  --timeout <ms>                 Timeout"
$selection.TypeParagraph()

# ─── 6. pdf ──────────────────────────────────────────────
Add-Heading "6. pdf — Save page as PDF" 1
Add-Code "npx playwright pdf [options] <url> <filename>"
Add-Normal "Options:"
Add-Code "  --wait-for-selector <selector> Wait for element"
Add-Code "  --viewport-size <size>         Viewport size"
Add-Code "  --timeout <ms>                 Timeout"
Add-Code "  -b, --browser <browser>        Only chromium supports PDF"
$selection.TypeParagraph()

# ─── 7. test ─────────────────────────────────────────────
Add-Heading "7. test — Run tests" 1
Add-Code "npx playwright test [options] [test-filter...]"
Add-Normal "Options:"
Add-Code "  --headed                       Run in headed mode (show browser)"
Add-Code "  --ui                           Open UI mode (visual runner)"
Add-Code "  --debug                        Run with Playwright Inspector"
Add-Code "  -g, --grep <pattern>           Only run tests matching pattern"
Add-Code "  --grep-invert <pattern>        Skip tests matching pattern"
Add-Code "  -x                             Stop after first failure"
Add-Code "  --retries <number>             Retry failed tests N times"
Add-Code "  --workers <number>             Parallel workers count"
Add-Code "  --timeout <ms>                 Test timeout"
Add-Code "  --reporter <reporter>          list | dot | html | json | line"
Add-Code "  --project <name>               Run specific project from config"
Add-Code "  --config <file>                Path to config file"
Add-Code "  --ignore-snapshots             Ignore screenshot diffs"
Add-Code "  --update-snapshots             Update snapshot files"
Add-Code "  --pass-with-no-tests           Exit 0 if no tests found"
Add-Code "  --trace <mode>                 on | off | retain-on-failure | on-first-retry"
Add-Code "  --video <mode>                 on | off | retain-on-failure"
Add-Code "  --screenshot <mode>            on | off | only-on-failure"
Add-Code "  --forbid-only                  Fail if test.only is used"
Add-Code "  --fully-parallel               Run all tests in parallel"
Add-Code "  --last-failed                  Re-run only last failed tests"
Add-Code "  --shard <current/all>          Shard tests e.g. 1/3"
$selection.TypeParagraph()

# ─── 8. show-report ──────────────────────────────────────
Add-Heading "8. show-report — View HTML test report" 1
Add-Code "npx playwright show-report [options] [report-folder]"
Add-Normal "Options:"
Add-Code "  --host <host>        Host to serve report (default: localhost)"
Add-Code "  --port <port>        Port to serve report (default: 9323)"
$selection.TypeParagraph()

# ─── 9. show-trace ───────────────────────────────────────
Add-Heading "9. show-trace — View trace file" 1
Add-Code "npx playwright show-trace [options] [trace-file.zip]"
Add-Normal "Options:"
Add-Code "  --browser <browser>   Browser to use for viewer"
Add-Code "  --port <port>         Port for trace viewer server"
Add-Code "  --host <host>         Host for trace viewer server"
$selection.TypeParagraph()

# ─── 10. merge-reports ───────────────────────────────────
Add-Heading "10. merge-reports — Merge sharded reports" 1
Add-Code "npx playwright merge-reports [options] <blob-report-dir>"
Add-Normal "Options:"
Add-Code "  --config <file>       Config file path"
Add-Code "  --reporter <reporter> Output reporter: html | json"
$selection.TypeParagraph()

# ─── 11. Utilities ───────────────────────────────────────
Add-Heading "11. Utilities" 1
Add-Code "npx playwright uninstall          # Remove installed browsers"
Add-Code "npx playwright install-deps       # Install OS-level browser dependencies"
Add-Code "npx playwright clear-cache        # Clear Playwright build and test caches"
Add-Code "npx playwright init-agents        # Initialize repository agents"
Add-Code "npx playwright --version          # Show installed version"
Add-Code "npx playwright --help             # Show all commands"
Add-Code "npx playwright help <command>     # Help for a specific command"
$selection.TypeParagraph()

# ─── 12. Windows PowerShell Tips ─────────────────────────
Add-Heading "12. Windows PowerShell Tips" 1
Add-Normal "On Windows PowerShell, set environment variables using `$env:` syntax:"
Add-Code "  # Enable Inspector while running tests"
Add-Code "  `$env:PWDEBUG=1; npx playwright test"
Add-Code ""
Add-Code "  # Slow down actions by 1000ms"
Add-Code "  `$env:PLAYWRIGHT_SLOW_MO=1000; npx playwright test"
$selection.TypeParagraph()

# ─── Save ─────────────────────────────────────────────────
$savePath = "C:\Users\ITSD\Desktop\Playwright\AI_playwright\Playwright_CLI_Reference.docx"
$doc.SaveAs([ref]$savePath, [ref]16)  # 16 = docx format
$doc.Close()
$word.Quit()

Write-Host "✅ Word file saved to: $savePath"
