## Debugging
ELI5: this is the F12 equivalent for your extension.

ELI15: Adobe provides a way to debug your extension **while it's running**.
What it means is that you can open a Chrome DevTools window and see the console logs of your extension, as well as inspect the DOM and use the debugger.

To do that, follow these steps:
1. Open your extension, make sure it's running.
2. Open Chrome (Yes, it has to be Chrome) and go to `localhost:8080`.
3. You should see `Inspectable WebContents` followed by a link. Click that link.
4. You should now see a Chrome DevTools window with your extension's console logs. You can even inspect elements right inside your extension. Keep this window open side by side with your Adobe app and you can debug your extension in real time.
5. If you close your extension, you will have to repeat steps 1-3.

In case something doesn't work:
* Make sure your extension is running.
* Make sure you are using Chrome.
* Go to the `.debug` file and make sure that Host Name matches the one in your manifest file.
* Go to the `.debug` file and make sure the Extension Id matches the one in your manifest file.
* Go to the `.debug` file and make sure the Port is still set to `8080`. You can use other ports, just make sure you navigate to the right one in step 2.

* Doomsday scenario: If something feels cursed, it probably is. Try restarting your computer.

Common points of confusion:
* The localhost debugging link has **nothing** to do with your vite dev server. It's a completely different thing.
