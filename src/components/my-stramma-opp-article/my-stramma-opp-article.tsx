import { Component} from '@stencil/core';

@Component({
  tag: 'my-stramma-opp-article',
  styleUrl: 'my-stramma-opp-article.styl',
})
export class MyStrammaOppArticle {

  
  render() {
    return (
      <div class="body">
        <vn-header size="1">A LIST APART</vn-header>
        <vn-header size="2">Designing for Conversions</vn-header>
        <div>
          <vn-text type="button">
            by <vn-lenker text="Brandon Gregory" href="https://alistapart.com/author/brandongregory/"/> &middot; February 14, 2019
          </vn-text>
          <vn-text type="caption">
            Published in 
            <vn-lenker text=" Business, " hasHover="true" href="https://alistapart.com/topic/business/"/>
            <vn-lenker text="Design" hasHover="true" href="https://alistapart.com/topic/design/"/>
          </vn-text>
          <vn-content>
            <p class="body-en">
            What makes creative successful? Creative work often lives in the land of feeling—we can say we like something, point to how happy the client is, or talk about how delighted users will be, but can’t objectively measure feelings. Measuring the success of creative work doesn’t have to stop with feeling. In fact, we can assign it numbers, do math with it, and track improvement to show clients objectively how well our creative is working for them.
            </p>
            <p class="body-en">
            David Ogilvy once said, “If it doesn’t sell, it isn’t creative.” While success may not be a tangible metric for us, it is for our clients. They have hard numbers to meet, and as designers, we owe it to them to think about how our work can meet those goals. We can track sales, sure, but websites are ripe with other opportunities for measuring improvements. Designing for conversions will not only make you a more effective designer or copywriter, it will make you much more valuable to your clients, and that’s something we should all seek out.
            </p>
            <h3>Wait—what’s a conversion?</h3>
            <p class="body-en">
            Before designing for conversions, let’s establish a baseline for what, exactly, we’re talking about. A conversion is an action taken by the user that accomplishes a business goal. If your site sells things, a conversion would be a sale. If you collect user information to achieve your business goals, like lead aggregation, it would be a form submission. Conversions can also be things like newsletter sign-ups or even hits on a page containing important information that you need users to read. You need some tangible action to measure the success of your site—that’s your conversion.
            </p>
            <p class="body-en">
            Through analytics, you know how many people are coming to your site. You can use this to measure what percentage of users are converting. This number is your conversion rate, and it’s the single greatest metric for measuring the success of a creative change. In your analytics, you can set up goals and conversion funnels to track this for you (more on conversion funnels shortly). It doesn’t matter how slick that new form looks or how clever that headline is—if the conversion rate drops, it’s not a success. In fact, once you start measuring success by conversion rate, you’ll be surprised to see how even the cleverest designs applied in the wrong places can fail to achieve your goals.
            </p>
            <p class="body-en">
            Conversions aren’t always a one-step process. Many of us have multi-step forms or long check-out processes where it can be very useful to track how far a user gets. It’s possible to set up multiple goals along the way so your analytics can give you this data. This is called a conversion funnel. Ideally, you’ll coordinate with the rest of your organization to get data beyond the website as well. For instance, changing button copy may lead to increased form submissions but a drop in conversions from lead to sale afterward. In this case, the button copy update probably confused users rather than selling them on the product. A good conversion funnel will safeguard against false positives like that.
            </p>
            <p class="body-en">
            It’s also important to track the bounce rate, which is the percentage of users that hit a page and leave without converting or navigating to other pages. A higher bounce rate is an indication that there’s a mismatch between the user’s expectations when landing on your site and what they find once landing there. Bounce rate is really a part of the conversion funnel, and reducing bounce rate can be just as important as improving conversion rate.
            </p>
            <h4>Great. So how do we do that?</h4>
            <p class="body-en">
            When I was first getting started in conversion-driven design, it honestly felt a little weird. It feels shady to focus obsessively on getting the user to complete an action. But this focus is in no way about tricking the user into doing something they don’t want to do—that’s a bad business model. As Gerry McGovern has commented, if business goals don’t align with customer goals, your business has no future. So if we’re not tricking users, what are we doing?
            </p>
            <p class="body-en">
            Users come to your site with a problem, and they’re looking for a solution. The goal is to find users whose problems will be solved by choosing your product. With that in mind, improving the conversion rate doesn’t mean tricking users into doing something—it means showing the right users how to solve their problem. That means making two things clear: that your product will solve the user’s problem, and what the user must do to proceed.
            </p>
            <p class="body-en">
            The first of these two points is the value proposition. This is how the user determines whether your product can solve his or her problem. It can be a simple description of the benefits, customer testimonials, or just a statement about what the product will do for the user. A page is not limited to one value proposition—it’s good to have several. (Hint: the page’s headline should almost always be a value proposition!) The user should be able to determine quickly why your product will be helpful in solving their problem. Once the value of your product has been made clear, you need to direct the user to convert with a call to action.
            </p>
            <p class="body-en">
            A call to action tells the user what they must do to solve their problem—which, in your case, means to convert. Most buttons and links should be calls to action, but a bit of copy directly following a value proposition is a good place too. Users should never have to look around to find out what the next step is—it should be easy to spot and clear in its intention. Also, ease of access is a big success factor here. My team’s testing found that replacing a Request Information button (that pointed to a form page) with an actual form on every page significantly boosted the conversion rate. If you’re also trying to get information from a user, consider a big form at the top of the page so users can’t miss it. When they scroll down the page and are ready to convert, they remember the form and have no question as to what they have to do.
            </p>
            <p class="body-en">
            So improving conversion rate (and, to some degree, decreasing bounce rate) is largely about adding clarity around the value proposition and call to action. There are other factors as well, like decreasing friction in the conversion process and improving performance, but these two things are where the magic happens, and conversion problems are usually problems with one of them.
            </p>
            <h5>So, value propositions…how do I do those?</h5>
            <p class="body-en">
            The number one thing to remember when crafting a value proposition is that you’re not selling a product—you’re selling a solution. Value propositions begin with the user’s problem and focus on that. Users don’t care about the history of your company, how many awards you’ve won, or what clever puns you’ve come up with—they care about whether your product will solve their problem. If they don’t get the impression that it can do that, they will leave and go to a competitor.
            </p>
            <p class="body-en">
            In my work with landing pages for career schools, we initially included pictures of people in graduation gowns and caps. We assumed that the most exciting part of going back to school was graduating. Data showed us that we were wrong. Our testing showed that photos of people doing the jobs they would be training for performed much better. In short, our assumption was that showing the product (the school) was more important than showing the benefit (a new career). The problem users were trying to solve wasn’t a diploma—it was a career, and focusing on the user showed a significant improvement in conversion rate.
            </p>
            <p class="body-en">
            We had some clients that insisted on using their branding on the landing pages, including one school that wanted to use an eagle as their hero image because their main website had eagles everywhere. This absolutely bombed in conversions. No matter how strong or consistent your branding is, it will not outperform talking about users and their problems.
            </p>
            <p class="body-en">
            Websites that get paid for clicks have mastered writing headlines this way. Clickbait headlines get a groan from copywriters—especially since they often use their powers for evil and not good—but there are some important lessons we can learn from them. Take this headline, for instance:
            </p>
            <h6>Get an Associate’s degree in nursing</h6>
            <p class="body-en">
            Just like in the example above with the college graduates, we’re selling the product—not the benefit. This doesn’t necessarily show that we understand the user’s problem, and it does nothing to get them excited about our program. Compare that headline to this one:
            </p>
            <h1>Is your job stuck in a rut? Get trained for a new career in nursing in only 18 months!</h1>
            <p class="body-en">
            In this case, we lead with the user’s problem. That immediately gets users’ attention. We then skip to a benefit: a quick turnaround. No time is wasted talking about the product—we save that for the body copy. The headline focuses entirely on the user.
            </p>
            <p class="body-en">
            In your sign-up or check-out process, always lead with the information the user is most interested in. In our case, letting the user first select their school campus and area of study showed a significant improvement over leading with contact information. Similarly, put the less-exciting content last. In our testing, users were least excited about sharing their telephone number. Moving that field to be the last one in the form decreased form abandonment and improved conversions.
            </p>
            <p class="body-en">
            As designers, be cognizant of what your copywriters are doing. If the headline is the primary value proposition (as it should be), make sure the headline is the focal point of your design. Ensure the messaging behind your design is in line with the messaging in the content. If there’s a disagreement in what the user’s problem is or how your product will solve that problem, the conversion rate will suffer.
            </p>
            


          </vn-content>
        </div>
      </div>
    )

  }

}
