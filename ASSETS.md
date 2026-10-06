# Visual assets

## Fictional testimonial headshots

- Files: `public/images/testimonials/fabrizio-fernandez.webp`, `public/images/testimonials/sarah-mitchell.webp`, `public/images/testimonials/alex-morgan.webp`.
- Method: built-in `image_gen` tool; three original generated portraits of fictional people, without input photos or third-party stock photography.
- Purpose: fictional client stories in this portfolio practice project. These portraits do not document real customers or endorsements.
- Delivery: optimized 960px WebP assets, consumed by `components/stories.tsx` through Next.js Image. Generated originals are retained outside the repository.
- These are AI-generated assets, not stock photos supplied under a CC0 or public-domain license.
- Final prompts, in the same order as the files above:

> Use case: photorealistic-natural. Asset type: headshot for a fictional client testimonial on a SaaS portfolio landing page. Create ONE individual square 1024x1024 professional editorial headshot, not a collage. Entire head and shoulders visible, head centered with generous space above hair, subject looking at camera with warm natural smile. Soft diffused studio window light, light warm gray seamless background, subtle natural skin texture, realistic eyes and hair, 85mm portrait lens. Chest-up framing with face occupying approximately 40 percent of image height; crop-safe for landscape cards. All people must be entirely fictional. No recognizable public figure, no text, logo, watermark, props, hands, border, or graphics. Subject: fictional male creative studio founder in his late 30s, medium olive skin, short dark wavy hair, neat light stubble, navy casual blazer over white crewneck shirt.

> Use case: photorealistic-natural. Asset type: headshot for a fictional client testimonial on a SaaS portfolio landing page. Create ONE individual square 1024x1024 professional editorial headshot, not a collage. Entire head and shoulders visible, head centered with generous space above hair, subject looking at camera with warm natural smile. Soft diffused studio window light, light warm gray seamless background, subtle natural skin texture, realistic eyes and hair, 85mm portrait lens. Chest-up framing with face occupying approximately 40 percent of image height; crop-safe for landscape cards. All people must be entirely fictional. No recognizable public figure, no text, logo, watermark, props, hands, border, or graphics. Subject: fictional female marketing director in her mid 30s, fair skin, shoulder-length chestnut hair with soft waves, muted sage green blouse, confident and approachable.

> Use case: photorealistic-natural. Asset type: headshot for a fictional client testimonial on a SaaS portfolio landing page. Create ONE individual square 1024x1024 professional editorial headshot, not a collage. Entire head and shoulders visible, head centered with generous space above hair, subject looking at camera with warm natural smile. Soft diffused studio window light, light warm gray seamless background, subtle natural skin texture, realistic eyes and hair, 85mm portrait lens. Chest-up framing with face occupying approximately 40 percent of image height; crop-safe for landscape cards. All people must be entirely fictional. No recognizable public figure, no text, logo, watermark, props, hands, border, or graphics. Subject: fictional male team lead in his early 30s, dark brown skin, short natural curly black hair, clean-shaven, charcoal knit polo, friendly and relaxed.


## Hero portrait

- File: `public/images/hero.png`
- Method: built-in `image_gen` tool, transparent output.
- Reference: the landing-page image supplied by the user.
- Final prompt:

> Use case: ads-marketing. Generate a single isolated photorealistic studio portrait for a SaaS landing page based on the woman in the supplied design reference. Only the woman, no web design, no text, no cards, no charts, no circles. Friendly smiling young adult woman with long straight brown hair, thin round glasses, cream white long sleeve shirt with thin black horizontal stripes. Front facing from waist up, arms crossed with one index finger pointing up toward the upper left of image. Similar pose and appearance to the main portrait in the reference. Subject completely visible including hair and elbows, head near top. Soft professional studio lighting. Transparent background, clean natural cutout edges. Portrait aspect ratio 3:4.

## Payroll portrait and composition

- File: `public/images/payroll-woman.png`
- Method: built-in `image_gen` tool, transparent output.
- Reference: the payroll-card screenshot supplied by the user.
- The generated asset contains only the woman. The gray circle and four workflow cards are composed in `components/payroll-visual.tsx`, with each workflow card in its own component file.
- Final prompt:

> Use case: ads-marketing. Asset: standalone transparent portrait for the Zero Payroll Errors landing-page card. The supplied screenshot is only a visual reference for the woman. Create only a realistic studio photograph of a young adult woman with straight chest-length medium brown hair with subtle lighter ends, a charcoal dark navy fitted long-sleeve turtleneck sweater, arms folded naturally across her waist, her torso facing forward and her head turned slightly to the viewer's right, looking right with a subtle relaxed smile. Match the reference woman's appearance, pose, clothing and proportions closely. Show her entire head, hair, elbows, crossed arms and torso down to the hips, with a little transparent margin above the head and at the sides. Soft even studio lighting. True transparent background. No circle, no cards, no interface, no text, no thumbnails, no logos, no shadows outside the person. Portrait aspect ratio approximately 3:4.

## Stock photographs

- Team: https://images.unsplash.com/photo-1522071820081-009f0129c71c
- Client: https://images.unsplash.com/photo-1500648767791-00dcc994a43e

Both photographs are stored in `public/images/` and served locally through Next.js Image.

## Growth journey portrait

- File: `public/images/journey-woman.png`
- Method: built-in `image_gen` tool, transparent output.
- Reference: Screenshot 2026-10-05 at 9.54.29 PM supplied by the user.
- The portrait includes the woman and laptop only. The pale blue circle is CSS; the existing growth chart and badge remain independent components.
- Final prompt:

> Use case: ads-marketing. Asset type: separate transparent portrait for the Growth Journey landing-page section. Input image: the attached screenshot is a visual reference for the woman and laptop only. Generate a high quality photorealistic studio cutout closely matching the reference: friendly young adult woman with long dark brown slightly wavy hair, thin round clear eyeglasses, a light gray blazer over a black-and-white horizontal striped shirt and white trousers. Smiling directly at the camera. Her right hand (viewer left) gently adjusts the glasses near her right temple; her left hand (viewer right) holds an open silver laptop at waist/chest height, laptop back facing the viewer and extending to the right. Frame the complete head, all hair, both elbows, hand and entire laptop, torso down to the hips. Similar proportions and frontal pose to the reference. Soft even studio lighting, realistic hands and laptop. Transparent background with clean edges and a little margin on every side. Square canvas. Only the woman and laptop; do not generate any circles, background, charts, cards, badges, text, logos, watermarks or interface. The background circle and existing interface elements will be composed separately in code.


## Typography

The existing Geist variable Latin font is stored in `app/fonts/geist-latin.woff2` and loaded with `next/font/local`, so builds do not require a Google Fonts download.
