# Atelam
A computer application for everyone who wants freedom in creation

# Planned Features

## A moral and true to reality crediting system
**Atelam** will offer freedom of expression and creation by featuring a crediting system who benefits both the original creators and passionate fans as well.

### How?
- The copyright system will feature revenue splitting based on relevancy metrics assessed by multiple parties. Based on these relevancy metrics the in-app created revenue will be split between the [IP](https://en.wikipedia.org/wiki/Intellectual_property) holders and the entities who created content based on the IP.
- The relevancy metrics will measure the influence that each IP has on the remixed content. It is important to keep in mind that this metric will only be affected by relevancy, not by the amount of appearances of a certain IP, or such other metrics. It is also important to mention that the relevancy score might not necessarily reflect the legal necessity or nonnecessity for a revenue split, however the relevancy metric aims to reflect that as good as possible.
- The relevancy metric will be assessed by users that consumed the content. Users might be motivated by various means in order to help in assessing the relvancy metric.
- A piece of content can make revenue by ads, donations and payments.
- An IP holder can decide to split an amount of the due revenue with the IP remixer. The IP holder can set a default amount of the split revenue and decide particular split amounts for particular cases.
- An IP remixer might want to not make any money based on their content and this can happen when either the content is fully original or when an IP holder might not want any pay-out out of their due revenue. In this case, their content will have the minimal amount of ads that supports its hosting on the platform.
- As in real life, an IP holder might not be interested in every remixed content that uses their IP. And this app will work on the same principle. The content whose relevancy metrics will be automatically assessed by the Atelam app will usually be the more popular content. Only after the relevancy metrics are decided the revenue can be split. But if one party wants to cash-out quicker, they can pay a sum for the requested relevancy metric assesing, the paid sum being able to be recovered once the relevancy metrics are decided. However, there is also this risk that they might not make their money back so they should be pretty sure before requesting a metric assessing.
- IP holders can set default values for revenue splitting. Those values can be based on the influence of the IP, the revenue made by the remixed content etc.. For example, an IP holder can decide to cash-out for any remixed content whose IP attribution is less than 2%, or for any content whose overall revenue is bigger than 10k$/month.
- If someone was not attributed at one point and the cash-out was executed, then a portion of the further cashout that was meant for the remixer will go to the uncredited IP holder. In some edge cases, where the IP remixer decides to remove their content before the uncredited IP holder was paid off, some measures can be taken. Measures such as prohibiting the content from being removed from the platform unless everyone is paid fairly, or displaying more ads than usual to the IP remixer, ads whose part of the revenue made from them will go to the IP holder. However, even with these measures implemented, there might still be edge cases where the uncredited IP holder might never get to be paid really fully. I do believe that these cases will be super rare, and those should be covered in the Terms Of Service or a similar informative document.
- On the other hand, if someone is wrongly attributed for an IP that is not theirs, then good on them. But I don't believe those will or should be common cases.
- An IP sharing algorithm can be found in the "revenueSplitting.py" file. Keep in mind that this algorithm does not cover for the cases when the attribution goes wrong.
- Some entities might take the content from the platform and share it on other platforms in an unethical manner. This is why the Atelam app will also contain a data base for that. Or otherwise, some entities might remix content whose original IP holder is not on the platform. The Atelam app will also contain a data base for that, and once, and if, the original IP holder joins the platform, then they will get the due revenue.

### What kind of work does it affect?
- Music.
- Images.
- Videos.
- Video games.
- Books.
- And if correctly implemented, even physical objects. However, this is not currently in the scope of the project.

## A recycling system
**Atelam** will feature a recycle system that will automatically remove the un-interacted-with files after a certain time. The condition of removal is simple - the cost of uploading some data coincides with the cost of keeping that data on the server for a certain amount of time. Let's assume that the data with the size *x* has the same cost of uploading it as keeping it on the server for *y* time units (those can be days, seconds, weeks etc). If no one interacts with the file for a certain, let's say, *z* amount of time then the file will be removed from the server. It will be assumed that if one has no interest in that file for *z* time it will, probably, not have interest in the file for, at least, the upcoming *y* amount of time. And if the assumption is right, worst case scenario is that the user will again upload the file after the *y* amount of time that it missed, essentially costing as if the file was kept on the server in that *y* amount of time when it was actually missing.
For example: someone uploads a on the 1st of March a video and its cost of upload is the same cost as keeping it on the server for approx a month. No one watches the video after it is uploaded. Stats say that if no one interacts with a video of that size for 2 months, the chances are they won't interact with it for another 1 month. This means that the video is removed from the platform on the 1st of May. If the user uploads the video again in May then the platform will gain a loss. If the user uploads the video again on the 1st of June, then basically the platform will gain neither a surplus nor a loss. If the video is uploaded again after the 1st of June, the platform will gain a cost surplus.

# The name
The name is still undecided, however, I believe that the name should be something simple and memorable.
