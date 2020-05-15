# SharePoint_Presave_Based_onRules
A complete Presave example in sharepoint O365 that checks RULES in other list and if satisfied saves the item

Firstly it reads the items of the current form in the current list "Ticket" 
and reads rules via an AJAX call the Workflow Rule List that has our Workflow Rules

If the Rules are found in the Workflow Rules list then then current form is saved.

Otherwise, a message "Rule not found yet" is shown to the user
