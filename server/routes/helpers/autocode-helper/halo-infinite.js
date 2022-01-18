export const getAppearanceByGamertag = async (lib, gamertag) => {
  try {
    // TODO: remove this return
    // return {
    //   data: {
    //     emblem_url:
    //       "https://assets.halo.autocode.gg/infinite/appearance/emblem/?id=104-001-olympus-skull-2845463e",
    //     backdrop_image_url:
    //       "https://assets.halo.autocode.gg/infinite/appearance/backdrop/?id=103-000-ui-background-7dd2ff78",
    //     service_tag: "MRGM",
    //   },
    //   additional: {
    //     gamertag: "King Marty 206",
    //   },
    // };

    const response = await lib.halo.infinite["@0.3.6"].appearance({
      gamertag: gamertag,
    });
    return response;
  } catch (error) {
    return error; // TODO: send better error response
  }
};
