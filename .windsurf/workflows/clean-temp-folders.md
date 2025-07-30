---
description: Deletes all screenshots from the 'screenshots/review' folder
---

---

## Screenshot Cleanup Workflow

This workflow removes all generated screenshot files from the `screenshots/review` directory.

### **Cleanup Step**

1.  **Run Cleanup Command:**
    *   This command will permanently delete all files inside the `screenshots/review` folder.
    *   Use this workflow after a review is complete and you no longer need the captured images.

    ```powershell
    # // turbo
    Remove-Item -Path "screenshots/review/*" -Force
    ```