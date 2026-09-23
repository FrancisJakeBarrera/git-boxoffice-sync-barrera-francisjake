cat > WORKFLOW.md <<'EOF'

\# Git Box Office Sync Workflow



\## 1. Final calculateTicketPrice



The final calculateTicketPrice combines changes from the different contributors.



\- Base price calculation

&#x20; The original code calculates the total using the ticket quantity and base ticket price.



\- 10% group discount

&#x20; This was added by Clone A in Task 1. Orders with 5 or more tickets receive a 10% discount.



\- 50% VIP surcharge

&#x20; This was added by Clone C in Task 4. Premium seating adds a 50% surcharge to the current total.



\- Rounding

&#x20; This was added by Clone B in Task 2. The final price uses Math.round() instead of Math.floor().



\- Flat $10 discount

&#x20; This was added by Clone A in Task 6. After the group discount and VIP surcharge are applied, $10 is subtracted from the total.



The final calculation combines the group discount, VIP surcharge, rounding, and flat $10 discount in one shared function.



\## 2. Task 3 Two-Way Conflict vs Task 5 Three-Way Conflict



The Task 3 conflict happened when Clone B tried to push a change after Clone A had already pushed a change to the same branch. The conflict was between two versions of the code, so it was a two-way conflict. The solution was to combine the group discount from Clone A with the rounding change from Clone B.



The Task 5 conflict was a three-way merge because Git compared the common base version with changes from both sides. By this point, the branch already contained the group discount and rounding changes, while Clone C had added the VIP surcharge. The conflict was resolved by keeping all three changes together.



\## 3. Why the Task 6 $10 Discount Affected Other Tests



The flat $10 discount was added inside the shared calculateTicketPrice function. Because the group discount, VIP surcharge, rounding, and flat discount all use the same function, changing one part of the calculation also changes the final result of other pricing scenarios.



This shows that changes in shared code are not always isolated. Even when a developer intends to add only one feature, that change can affect existing features and tests that depend on the same function. Testing the complete set of existing behaviors after making a change helps identify these effects.



\## 4. Process Change That Could Have Prevented the Rejected Pushes



A useful process change would be to fetch and synchronize with the remote branch before starting work or pushing changes.



If each contributor had run git fetch and checked the current remote branch before making or pushing their changes, they could have seen that the branch had moved. This would have reduced the chances of all three rejected pushes and allowed the contributors to integrate the latest changes before pushing.

EOF

